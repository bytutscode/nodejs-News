import { Request, Response } from "express";
import { makeMenuObject } from "../helpers/make_menu_object";
import { newsModel } from "../models/mainModel";

export const home = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject(''),
        title:"NEWS"
    })
}

export const business = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject("business"),
        title:"Business"
    })
}

export const thewallstreet = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject('tws'),
        title:"The wall street journal"
    })
}

export const techCrunch = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject('tc'),
        title:"Tech Crunch"
    })
}

export const tesla = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject('tesla'),
        title:"Tesla"
    })
}

export const apple = (req: Request, res:Response)=>{
    res.render('pages/home',{
        menu:makeMenuObject('apple'),
        titlePage:"Apple",
        news:newsModel.getNews()
    })
}


export const erroPage = (req: Request, res:Response) =>{
    res.send('erro pag')
}
