const CONFIG =  {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV || 'development',
    BASE_URL: process.env.BASE_URL
};


const configValidation = () => {
    Object.entries(CONFIG).forEach(([key, value]) => {
        if(!value) {
            throw new Error(`Missing environment variable: ${key}`);
        }
    })
}

configValidation();

export default CONFIG;
