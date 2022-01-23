class UserController {
  async signup(req, res) {}

  async login(req, res) {}

  async auth(req, res) {
    const { id } = req.query;
    res.json(id);
  }
}

module.exports = new UserController();
