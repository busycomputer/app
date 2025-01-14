# BusyComputer

Durable Visual AI Workflow Infrastructure

## Development

### Prerequisites

1. Install Nix
   ```sh
    sh <(curl -L https://nixos.org/nix/install) --daemon
   ```
2. Enable Nix flakes
   ```sh
   mkdir -p ~/.config/nix
   echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
   ```
3. Make sure Docker Daemon is running

   ```sh
   sudo systemctl start docker
   ```

4. Clone the repository
   ```sh
   git clone https://github.com/busycomputer/app.git
   ```
