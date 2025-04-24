class HealthController {
  async getHealth (req, res) {
    return res.status(200).json({ status: 'OK', message: 'Service is healthy' });
  }
}

module.exports = HealthController;
