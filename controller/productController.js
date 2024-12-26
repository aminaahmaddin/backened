// const product = require('../models/productSchema')

// const creatproduct = async (req, res) => {
//     try {
//         const body = req.body
//         const product = new product(body)
//         product.save()
//         res.status(200).json({ message: "product is created", product: product })
//     }
//     catch (err) {
//         res.status(404).json(err)
//     }
// }
// const getproduct = async (req, res) => {
//     try {
//         const productData = await product.find()
//         res.status(200).json({ message: "product is fetch", product: productData })
//     }
//     catch (err) {
//         res.status(404).json(err)
//     }
// }

// const deleteproduct = async (req, res) => {
//     try {
//         const id = req.params.id
//         const product = await product.findByIdAndDelete(id)
//         product.save()
//         res.status(200).json({ message: "product is deleted" })
//     }
//     catch (err) {
//         res.status(404).json(err)
//     }
// }

// const updateproduct = async (req, res) => {
//     try {
//         const id = req.params.id
//         const product = await product.findByIdAndUpdate(id, req.body)
//         product.save()
//         res.status(200).json({ message: "product is Updated" })
//     }
//     catch (err) {
//         res.status(404).json(err)
//     }
// }
// module.exports = { creatproduct, getproduct, deleteproduct, updateproduct }