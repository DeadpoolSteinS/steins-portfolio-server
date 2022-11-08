const express = require("express");
const projectRouter = express.Router();
const { Project } = require("../models/project");

projectRouter.get("/api/projects/", async (req, res) => {
  try {
    const projects = await Project.find({}).exec();
    res.json(projects);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

projectRouter.post("/api/add-project/", async (req, res) => {
  try {
    const { title, desc, image } = req.body;

    let project = new Project({
      title,
      desc,
      image,
    });

    project = await project.save();
    res.json(project);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = projectRouter;
