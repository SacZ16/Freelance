const Home = require("../models/Home.js");


const getHome = async(req, res) =>{
    try{
        const home = await Home.find().populate("elegidos").populate({path:"destacados",populate:{path:"categoria"}});
        return res.status(200).json(home)
    }catch(e){
        return res.json({ msg: `Error 404 - ${e}` });
    }
}

const updateSlice = async (req, res) => {
    const { id, slice } = req.body;
  
    try {
      const updateHome = await Home.findByIdAndUpdate(id, {slice : slice}, {
        new: true,
      });
      console.log(updateHome)
      if (!updateHome) return res.status(406).json({ msg: "Home not found" });
      return res.status(200).json({ msg: "Home Update" });
    } catch (e) {
      return res.status(405).json({ msg: `Error 404 - ${e}` });
    }
  };

  const postHome = async (req, res) => {
    const { slice, posters, elegidos, destacados } = req.body;
    try {
      const newHome = new Home({
       slice,
       posters,
       elegidos,
       destacados
      });
      await newHome.save();
      return res.status(200).json(newHome,);
    } catch (e) {
      console.log(res.status(404).json({ msg: `Error 404 ${e}` }));
    }
  };

  const updatePosters = async (req, res) => {
    const { id, posters } = req.body;
  
    try {
      const updateHome = await Home.findByIdAndUpdate(id, {posters : posters}, {
        new: true,
      });
      console.log(updateHome)
      if (!updateHome) return res.status(406).json({ msg: "Home not found" });
      return res.status(200).json({ msg: "Home Update" });
    } catch (e) {
      return res.status(405).json({ msg: `Error 404 - ${e}` });
    }
  };

  const updateElegidos = async (req, res) => {
    const { id, elegidos } = req.body;
  
    try {
      const updateHome = await Home.findByIdAndUpdate(id, {elegidos : elegidos}, {
        new: true,
      });
      console.log(updateHome)
      if (!updateHome) return res.status(406).json({ msg: "Home not found" });
      return res.status(200).json({ msg: "Home Update" });
    } catch (e) {
      return res.status(405).json({ msg: `Error 404 - ${e}` });
    }
  };

  const updateDestacados = async (req, res) => {
    const { id, destacados } = req.body;
  
    try {
      const updateHome = await Home.findByIdAndUpdate(id, {destacados : destacados}, {
        new: true,
      });
      console.log(updateHome)
      if (!updateHome) return res.status(406).json({ msg: "Home not found" });
      return res.status(200).json({ msg: "Home Update" });
    } catch (e) {
      return res.status(405).json({ msg: `Error 404 - ${e}` });
    }
  };

module.exports = {getHome, updateSlice, updatePosters, updateElegidos, updateDestacados, postHome}