import React from 'react';

export const AboutVinexSection: React.FC = () => {
  return (
    <section className="w-full my-6">
      {/* Red Ribbon Angled Header */}
      <div className="relative inline-block mb-0">
        <div className="bg-[#b70000] text-white font-extrabold text-xs sm:text-[13px] tracking-wide px-4 py-1.5 shadow-xs uppercase pr-8 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
          BIGGEST ONLINE SPORTS & FITNESS EQUIPMENT STORE / SHOP IN INDIA
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-white border border-gray-300 rounded-b p-4 sm:p-5 shadow-2xs text-gray-700 text-xs sm:text-[12.5px] leading-relaxed space-y-3.5">
        <p>
          We all welcome you at <span className="font-bold text-gray-900">VINEXSHOP.COM</span>, an
          exclusive Online Sports & Fitness Equipment Store established by{' '}
          <span className="font-medium text-gray-900">Vinex Enterprises Pvt. Ltd.</span> having
          its head office in sports city <span className="font-medium text-gray-900">Meerut, India</span>.
          A one-stop-shop to fulfill your all sports and fitness buying needs with a diverse range
          of sports and fitness products like - Cricket, Badminton, Table Tennis, Athletics,
          Basketball, Beach Toys, Football, Volleyball, Gymnastic, Carrom Board, Board Games,
          Boxing, Training Equipment, Home Exercise, Fitness Accessories, Treadmills, Steppers,
          Home Gym Machines, Gym and Crash Mats, Exercise Bikes and much more. At VINEXSHOP.COM you
          will get a great value for money all year round and a hassle free shopping experience with
          various payment options including -{' '}
          <span className="font-bold text-gray-900">
            Credit Cards, ATM cum Debit Cards, Cash Cards, Internet Banking, Cash, Cheque, DD, Phone
            Pay and Direct Fund Transfer (NEFT / RTGS)
          </span>.
        </p>

        <p>
          <span className="font-bold text-gray-900">About VINEX:</span> Vinex Enterprises Pvt.
          Ltd is India's biggest sporting goods manufacturer & supplier and doing its business under
          the brand name VINEX since 1957.{' '}
          <span className="font-bold text-gray-900">
            VINEX has been awarded No. 1 since 2004-05 for Highest Exports of Athletics Equipment
            from India by SGEPC.
          </span>{' '}
          We have established VINEXSHOP.COM for the ease of the customers to purchase quality
          sports products and services online at anytime and anywhere.
        </p>
      </div>
    </section>
  );
};
