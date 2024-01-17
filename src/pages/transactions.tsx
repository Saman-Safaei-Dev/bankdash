import { linkEnum } from '@/enums/link'
import Body from '@/components/layout/Body'
import { CardIcon, CoinIcon, PaypalIcon } from '@/assets/icons'
import CreditCard from '@/components/ui/card/CreditCard'
import Table from '@/components/ui/table/Table'

function Transactions() {
  return (
    <Body pageName={linkEnum.Transactions}>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='grid grid-cols-2 col-span-1 lg:col-span-2'>
            <p className='flex items-center text-2xl font-semibold text-primary-200'>Transactions</p>
            <p className='flex items-center justify-end text-lg text-primary-200'>See All</p>
          </div>
          <CreditCard theme='blue' />
          <CreditCard theme='white' />
        </div>
        <div className='flex flex-col gap-5'>
          <p className='flex items-center text-2xl font-semibold text-primary-200'>Recent Transaction</p>
          <ul className='bg-white rounded-xl overflow-hidden text-primary-200 p-5 space-y-4'>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-full'>
                <CardIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Deposit from my Card</p>
                  <p className='text-dark-blue'>25 January 2021</p>
                </div>
                <p className='text-magenta font-bold'>-$500</p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-primary-100/20 text-primary-100 rounded-full'>
                <PaypalIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Deposit Paypal</p>
                  <p className='text-dark-blue'>25 January 2021</p>
                </div>
                <p className='text-cyan font-bold'>+$500</p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-full'>
                <CoinIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Jemi Wilson</p>
                  <p className='text-dark-blue'>25 January 2021</p>
                </div>
                <p className='text-cyan font-bold'>+$500</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-primary-200 text-xl'>Weekly Activity</p>
        <Table />
      </div>
    </Body>
  )
}

export default Transactions