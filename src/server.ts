import express from "express"
import convert from "./convertor";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("-- Conversion tool is running! Send POST request to /bee-to-topol and await the result --")
})

app.post("/bee-to-topol", (req, res) => {
    const data = req.body;
    const { template: convertedTemplate, warnings } = convert(data, {});
    res.send(convertedTemplate);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening on PORT ${port}`)
});