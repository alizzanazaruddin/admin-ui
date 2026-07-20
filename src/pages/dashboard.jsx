import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

function dashboard() {
    return (
        <>
            <MainLayout>
                <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6">
                    <div className="sm:col-span-4">
                    <Card
                    title="Total Balance"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </div>
                <div className="sm:col-span-4">
                    <Card
                    title="Goals"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </div>
                <div className="sm:col-span-4">
                    <Card
                    title="Upcoming bills"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </div>
                </div>
            </MainLayout>
        </>
    );
}

export default dashboard;