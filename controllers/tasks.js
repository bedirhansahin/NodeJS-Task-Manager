const getAllTasks = (req, res) => {
    res.send("All Tasks");
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
    res.json();
};

const deleteTask = (req, res) => {
    res.send("Delete Task");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    deleteTask,
    updateTask,
};
