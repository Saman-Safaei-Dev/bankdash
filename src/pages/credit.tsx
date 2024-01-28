import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/Body";
import CreditCard from "@/components/ui/card/CreditCard";
import AddCardForm from "@/components/feature/AddCardForm";
import CardSettingCard from "@/components/ui/card/CardSettingCard";

function Credit() {
  return (
    <Body pageName={linkEnum.Credit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CreditCard theme="ocean" />
        <CreditCard theme="blue" />
        <CreditCard theme="white" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Card Expense Statistics</p>
        </div>
        <div className='col-span-1 lg:col-span-2 flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Card List</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='col-span-1 lg:col-span-2 flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Card List</p>
          <div className="bg-white rouonded-lg p-6 overflow-hidden space-y-6">
            <p className="text-primary-400 leading-7">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
            <AddCardForm />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Card Expense Statistics</p>
          <CardSettingCard />
        </div>
      </div>
    </Body>
  );
}

export default Credit;
