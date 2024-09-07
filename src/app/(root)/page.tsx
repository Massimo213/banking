import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RightSidebar from "@/components/RightSidebar";


export default function Home() {
  const loggedIn = { firstName: "Yahya",lastName:'Corleone' ,email:'contact@corleone.ca'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}/>
        </header>
        
      </div>
     <RightSidebar user={loggedIn}
     transactions={[]}
     banks={[{currentBalance:123.50},{
      currentBalance: 500.25 }]}
     />
    </section>
  );
}
