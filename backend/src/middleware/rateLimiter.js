import ratelimit from "../config/upstash.js";

const rateLimiter = async (request, response, next) => {
  try {

    const { success } = await ratelimit.limit("my-limit-key"); //this is for every user alll together. Should be changed to be Ip specific, or user ID specific
    if (!success) {
      return response.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();

  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
