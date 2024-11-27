export const corsOptions = {
  origin: ["http://localhost:3000", "https://brasilapi.com.br"],
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
