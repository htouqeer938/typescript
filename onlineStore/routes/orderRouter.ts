import express, { Request, Response } from "express";
import * as orderModel from "../models/order";
import { Order, BasicOrder } from "../types/order";

const orderRouter = express.Router();
orderRouter.get("/orders", async (req: Request, res: Response) => {
  orderModel.findAll((err: Error, orders: Order[]) => {
    if (err) {
      return res.status(500).json({
        status: {
          code: 500,
          message: err.message,
        },
        response: "",
      });
    }
    // res.status(200).json({ data: orders });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Successfully!",
      },
      response: orders,
    });
  });
});

orderRouter.post("/orders", async (req: Request, res: Response) => {
  const newOrder: BasicOrder = req.body;
  orderModel.create(newOrder, (err: Error, orderId: number) => {
    if (err) {
      // return res.status(500).json({ message: err.message });
      return res.status(500).json({
        status: {
          code: 500,
          message: err.message,
        },
        response: "",
      });
    }

    // res.status(200).json({ orderId: orderId });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Order create successfully!",
      },
      response: orderId,
    });
  });
});

orderRouter.get("/orders/:id", async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  orderModel.findOne(orderId, (err: Error, order: Order) => {
    if (err) {
      // return res.status(500).json({ message: err.message });
      return res.status(500).json({
        status: {
          code: 500,
          message: err.message,
        },
        response: "",
      });
    }
    // res.status(200).json({ data: order });
    return res.status(200).json({
      status: {
        code: 200,
        message: "Successfully!",
      },
      response: order,
    });
  });
});

orderRouter.put("/orders/:id", async (req: Request, res: Response) => {
  const order: Order = req.body;
  orderModel.update(order, (err: Error) => {
    if (err) {
      // return res.status(500).json({ message: err.message });
      return res.status(500).json({
        status: {
          code: 500,
          message: err.message,
        },
        response: "",
      });
    }

    // res.status(200).send();
    return res.status(200).json({
      status: {
        code: 200,
        message: "Update successfully!",
      },
      response: "",
    });
  });
});

export { orderRouter };
