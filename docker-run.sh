git pull
docker stop blockchain-rio-landing
docker rm blockchain-rio-landing
docker build -t blockchain-rio-landing .
docker run -d -p 3000:3000 --name blockchain-rio-landing --network nginx-proxy-manager_nginx-proxy blockchain-rio-landing
