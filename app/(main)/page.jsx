"use client";
import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Delivery_men/profile/Profile";
import Order_statistics from "@/components/Delivery_men/orderStatistics/Order_statistics";
import AttendanceAndDeparture from "@/components/Delivery_men/Attendance and Departure/AttendanceAndDeparture";
import Orders from "@/components/Delivery_men/orders/Orders";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "orders";
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.nav}>
                <ul>
                    <li
                        className={
                            content == "personal_information"
                                ? classes.active
                                : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/",
                                query: { content: "personal_information" },
                            }}
                        >
                            المعلومات الشخصيه
                        </Link>
                    </li>
                    <li className={content == "orders" ? classes.active : ""}>
                        <Link
                            href={{
                                pathname: "/",
                                query: { content: "orders" },
                            }}
                        >
                            اوردرات اليوم
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Order_statistics" ? classes.active : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/",
                                query: { content: "Order_statistics" },
                            }}
                        >
                            احصائيات الاوردارت
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Attendance_Departure"
                                ? classes.active
                                : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/",
                                query: { content: "Attendance_Departure" },
                            }}
                        >
                            {" "}
                            الحضور و الانصراف
                        </Link>
                    </li>
                </ul>
            </div>
            {content == "personal_information" && <Profile />}
            {content == "Order_statistics" && <Order_statistics />}
            {content == "Attendance_Departure" && <AttendanceAndDeparture />}
            {content == "orders" && <Orders />}
        </section>
    );
};

export default page;
