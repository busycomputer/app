-- Create blog_posts table
CREATE TABLE blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create document_enhancements table
CREATE TABLE document_enhancements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    blog_post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    enhancement_type TEXT NOT NULL,
    original_content TEXT NOT NULL,
    enhanced_content TEXT NOT NULL,
    metrics JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_enhancements ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts
CREATE POLICY "Users can view their own posts"
    ON blog_posts
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own posts"
    ON blog_posts
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own posts"
    ON blog_posts
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own posts"
    ON blog_posts
    FOR DELETE
    USING (auth.uid() = user_id);

-- Create policies for document_enhancements
CREATE POLICY "Users can view enhancements for their posts"
    ON document_enhancements
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM blog_posts
        WHERE blog_posts.id = document_enhancements.blog_post_id
        AND blog_posts.user_id = auth.uid()
    ));

CREATE POLICY "Users can create enhancements for their posts"
    ON document_enhancements
    FOR INSERT
    WITH CHECK (EXISTS (
        SELECT 1 FROM blog_posts
        WHERE blog_posts.id = document_enhancements.blog_post_id
        AND blog_posts.user_id = auth.uid()
    ));

CREATE POLICY "Users can update enhancements for their posts"
    ON document_enhancements
    FOR UPDATE
    USING (EXISTS (
        SELECT 1 FROM blog_posts
        WHERE blog_posts.id = document_enhancements.blog_post_id
        AND blog_posts.user_id = auth.uid()
    ))
    WITH CHECK (EXISTS (
        SELECT 1 FROM blog_posts
        WHERE blog_posts.id = document_enhancements.blog_post_id
        AND blog_posts.user_id = auth.uid()
    ));

CREATE POLICY "Users can delete enhancements for their posts"
    ON document_enhancements
    FOR DELETE
    USING (EXISTS (
        SELECT 1 FROM blog_posts
        WHERE blog_posts.id = document_enhancements.blog_post_id
        AND blog_posts.user_id = auth.uid()
    )); 