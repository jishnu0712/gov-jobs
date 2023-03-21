export default function handler(req, res) {
    // req.method
    res.status(200).json({ name: req.method })
  }