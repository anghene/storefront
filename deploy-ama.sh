#!/bin/zsh

# Step 1: Remove any existing 'frontend' directory
rm -rf frontend

# Step 2: Create a new 'ama' directory and navigate into it
mkdir frontend && cd frontend

# Step 3: Unzip the project file into the current directory
unzip ../amazon-inspired-store-git.zip

# Step 4: Copy the Seagate Drive image into the correct assets folder
cp ../assets/seagate-drive.png src/assets/seagate-drive.png

# now the backend, make sure it is clean
rm -rf backend
mkdir backend && cd backend

cp ../cert/* backend/cert/*

# Step 5: Install the npm dependencies for backend
npm install

# installing for frontend
cd ../frontend
npm install

echo "Setup complete: All files are extracted, and dependencies installed. And certs and assets copied"

