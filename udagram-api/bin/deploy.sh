cd ./www
eb use Elbaruni-env 
eb setenv POSTGRES_DB=$POSTGRES_DB POSTGRES_HOST=$POSTGRES_HOST POSTGRES_USERNAME=$POSTGRES_USERNAME POSTGRES_PASSWORD=$POSTGRES_PASSWORD POSTGRES_PORT=$POSTGRES_PORT  AWS_ACCESS_KEY=$AWS_ACCESS_KEY_ID AWS_BUCKET=$AWS_BUCKET   AWS_PROFILE=$AWS_PROFILE AWS_REGION=$AWS_REGION    AWS_SECRET=$AWS_SECRET_ACCESS_KEY    JWT_SECRET=$JWT_SECRET PORT=$PORT URL=$URL 
eb deploy