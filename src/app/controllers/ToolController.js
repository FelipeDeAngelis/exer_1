import Tool from "../models/Tool";

class ToolController {
  // GET
  async index(req, res) {
    try {
      if (req.query.tags) {
        const tools = await Tool.find({ tags: { $all: req.query.tags } });

        return res.status(200).json(tools);
      }

      const tools = await Tool.find();
      return res.status(200).json(tools);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  // POST
  async store(req, res) {
    const { cod } = req.body;

    const verification = await Tool.findOne({ cod });

    if (verification) {
      return res.status(400).json({ message: "Código da disciplina ja existe!" });
    }
    try {
      const tool = await Tool.create(req.body);

      if (!tool) {
        return res
          .status(400)
          .json({ message: "Código, nome, professor, departamento são necessários." });
      }

      return res.status(201).json({ tool });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  // UPDATE
  async update(req, res) {
    const toolToUpdate = await Tool.findOne({
      _id: req.params.id
    });

    const { cod } = req.body;

    const verification = toolToUpdate.cod;
   
    if (verification != cod) {
      return res.status(400).json({ error: "Código da disciplina ou ID incorreto." });
    }

    const tool = await toolToUpdate.update(req.body);

    return res.status(201).json({ message: "Parabéns! Atualizado com sucesso..." });
  }

  // DELETE
  async delete(req, res) {
    const toolToDelete = await Tool.findOne({
      _id: req.params.id
    });

    const { cod } = req.body;

    const verification = toolToDelete.cod;

    if (verification != cod) {
      return res.status(400).json({ error: "Código da disciplina ou ID incorreto." });
    }

    const result = await Tool.deleteOne({ _id: req.params.id });

    return res.status(204).json({ message: "Disciplina deletada com sucesso!" });
  }
}

export default new ToolController();
