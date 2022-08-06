exports.currentUser = async (req, res) => {
  res.json(req.currentUser);
};

exports.privateRoute = async (req, res) => {
  if (req.currentUser) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
};
