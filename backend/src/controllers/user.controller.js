import { err } from "inngest/types";
import { User } from "../models/user.model.js";

export async function addAddress(req,res) {
    try {
        const {label,fullName,streetAddress,city,state,zipCode,phoneNumber,isDefault} = req.body

        const user = req.user

        //if this is set as default , unset all other defaults

        if(isDefault){
            user.addresses.forEach(addr => addr.isDefault = false)
        }

        user.addresses.push({
            label,
            fullname,
            streetAddress,
            city,
            state,
            zipCode,
            phoneNumber,
            isDefault: isDefault||false
        })

        await user.save()

        res.status(201).json({message:"address added succesfully", addresses:user.addresses})
    } catch (error) {
        console.error("error in addAddress controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function getAddresses(req,res) {
    try {
        const user = req.user

        res.status(200).json({addAddress: user.addresses})
    } catch (error) {
        console.error("error in getAddresses controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function updateAddress(req,res) {
    try {
        const {label,fullName,streetAddress,city,state,zipCode,phoneNumber,isDefault} = req.body

        const {addressId} = req.params

        const user = req.user
        const address = user.addresses.id(addressId)

        if(!address){
            return res.status(404).json({error:"address not found"})
        }
        //if this is set as default, unset all other defaults
        if(isDefault){
            user.addresses.forEach(addr => addr.isDefault = false)
        }

        address.label = label|| address.label
        address.fullName = fullName||address.fullName
        address.streetAddress = streetAddress || address.streetAddress
        address.city= city|| address.city
        address.state = state||address.state
        address.zipCode = zipCode || address.zipCode
        address.phoneNumber = phoneNumber||address.phoneNumber
        address.isDefault = isDefault !== undefined ? isDefault : address.isDefault

        await user.save()

        res.status(200).json({message:"address updated succesfully", addresses:user.addresses})

    } catch (error) {
        console.error("error in updateAddress controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function deleteAddress(req,res) {
    try {
        const {addressId} = req.params
        const user = req.user

        user.addresses.pull(addressId)
        await user.save()
        res.status(200).json({message:"address deleted succesfully", addresses:user.addresses})
    } catch (error) {
        console.error("error in deleteAddress controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function addToWishlist(req,res) {
    try {
        const {productId} = req.body
        const user = req.user

        //check if product is already in the wishlist
        if(user.wishlist.includes(productId)){
            return res.status(400).json({error: "product already in wishlist"})
        }

        user.wishlist.push(productId)
        await user.save()

        res.status(200).json({message: "product added to wishlist",wishlist:user.wishlist})
    } catch (error) {
        console.error("error in addToWishlist controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function removeFromWishlist(req,res) {
    try {
        const {productId} = req.params
        const user = req.user

        //check if product is already in the wishlist
        if(user.wishlist.includes(productId)){
            return res.status(400).json({error: "product is not even in wishlist"})
        }

        user.wishlist.pull(productId)
        await user.save()

        res.status(200).json({message:"product remove from wishlist",wishlist:user.wishlist})
    } catch (error) {
        console.error("error in removeFromWishlist controller: ", error)
        res.status(500).json({error: "ınternal server error"})
    }
}

export async function getWishlist(req,res) {
    try {
        const user = req.user
        res.status(200).json({wishlist: user.wishlist})
    } catch (error) {
        console.error("error in getWishlist controller: ",error)
        res.status(500).json({error: "ınternal server error"})
    }
}