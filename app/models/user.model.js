module.exports = (sequelize, Sequelize) => {
  const Checkin = sequelize.define(
    "user",
    {
      id: {
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      userId: {
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
    },
    {
      tableName: "User",
    }
  );
};
