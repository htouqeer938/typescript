import { BasicCustomer, Customer } from "../types/customer";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const createCustomer = (customer: Customer, callback: Function) => {
  const queryString = ``;
  db.query(
    queryString,
    [customer.name, customer.password, customer.email],
    (err, result) => {
      if (err) {
        callback(err);
      }
      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};
