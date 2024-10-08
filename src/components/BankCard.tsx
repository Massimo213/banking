import React from "react";
import Link from "next/link";
import { formatAmount } from "../../lib/utils";
import Image from "next/image";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className="bank-card">
        <div className="bank-card-content px-6 py-4"> {/* Added padding */}
          <div className="mb-4"> {/* Added margin-bottom for spacing */}
            <h1 className="text-12 font-semibold text-white pl-4"> {/* Added padding-left */}
              {userName}
            </h1>
            <p className="font-black text-white pl-4"> {/* Added padding-left */}
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white pl-4"> {/* Added padding-left */}
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white">
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white pl-4"> {/* Added padding-left */}
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image 
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
          />
          <Image 
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image 
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  );
};

export default BankCard;
