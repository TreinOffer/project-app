export const corsOptions = {
  origin: ["http://localhost:80", "https://brasilapi.com.br", "http://localhost", "https://play.google.com"],
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
