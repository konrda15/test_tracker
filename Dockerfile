# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Expose port (Fly maps this automatically)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
