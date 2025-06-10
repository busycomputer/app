export interface GradientStop {
    color: string;
    percentage: number;
  }
  
  export interface GradientConfig {
    shape: 'ellipse' | 'circle';
    position: string;
    stops: GradientStop[];
  }
  
  export const DEFAULT_GRADIENT: GradientConfig = {
    shape: 'ellipse',
    position: 'center',
    stops: [
      { color: 'transparent', percentage: 0 },
      { color: 'transparent', percentage: 50 },
      { color: 'black', percentage: 100 },
    ],
  }
  
  export const generateGradientString = (
    enableGradient: boolean | undefined,
    gradient?: Partial<GradientConfig>
  ): string => {
    if (!enableGradient) return 'none'
    
    // If no gradient config provided, use original default
    if (!gradient) {
      return 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, black 100%)'
    }
  
    const finalGradient = { ...DEFAULT_GRADIENT, ...gradient }
    const { shape, position, stops } = finalGradient
    const stopsString =
      stops?.map((stop) => `${stop.color} ${stop.percentage}%`).join(', ') ||
      'transparent 0%, transparent 50%, black 100%'
      
    return `radial-gradient(${shape} at ${position}, ${stopsString})`
  }
  