const express = require("express");
const app = express();
const { users, belanja, sequelize } = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", async (req, res) => {
  try {
    let query = `select * from users du`;

    let getData = await sequelize.query(query);
    getData = getData[0];

    if (getData.length === 0) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Event not found - retrieve all event",
      });
    }

    res.status(200).json({ success: true, data: getData });
  } catch (error) {
    console.log(error);
  }
});
app.get("/filter", async (req, res) => {
  try {
    let query = `select du.country , sum(db.total_buy) as total_buy
    from users du
    join data_belanja db on du.id = db.id
    group by du.country
    order by total_buy DESC`;

    let getData = await sequelize.query(query);
    getData = getData[0];

    if (getData.length === 0) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Event not found - retrieve all event",
      });
    }

    res.status(200).json({ success: true, data: getData });
  } catch (error) {
    console.log(error);
  }
});
app.post("/post", async (req, res) => {
  try {
    const insertData = await users.create({
      country: req.body.country,
      credit_card_type: req.body.credit_card_type,
      credit_card: req.body.credit_card,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    const data = await users.findOne({
      where: { id: insertData.id },
    });

    res.status(200).json({ message: "Success Add Data", data });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
