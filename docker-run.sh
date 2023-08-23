docker stop blockchain-rio-landing
docker remove blockchain-rio-landing
docker build -t blockchain-rio-landing .
docker run -d -p 3000:3000 --name blockchain-rio-landing blockchain-rio-landing

