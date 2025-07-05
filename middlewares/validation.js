const { z } = require("zod");

// Validation schemas
const registerSchema = z.object({
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .max(100, "Password is too long")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
});

const loginSchema = z.object({
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
});

const validate = (schema) => {
    return (req, res, next) => {
        const validationResult = schema.safeParse(req.body);

        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(
                (err) => err.message
            );
            return res.status(400).json({
                message: "Validation failed",
                errors: errors,
            });
        }

        req.validatedData = validationResult.data;
        next();
    };
};

module.exports = {
    validate,
    registerSchema,
    loginSchema,
};
