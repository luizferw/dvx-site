import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Ads } from '../../App'

export default function DetailsContentLeft({ props }) {
  const { ads } = useContext(Ads)
  const [filteredAds, setFilteredAds] = useState('')
  const [favorite, setFavorite] = useState(false)

  function addDots(nStr) {
    nStr += ''
    let x = nStr.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2')
    }
    return x1 + x2
  }

  useEffect(() => {
    if (ads && props.adDetail) {
      setFilteredAds(
        ads.filter(
          ad =>
            ad.category == props.adDetail.category &&
            ad.title !== props.adDetail.title
        )
      )
    }
  }, [ads, props.adDetail])

  return (
    <div className="DetailsContent w-full">
      <div className="index flex items-center gap-1 justify-start px-10 xl:px-0 my-7">
        <span className="text-lg">
          {props.adDetail && props.adDetail.address.city}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14px"
          height="14px"
          color="#4A4A4A"
          size="24"
        >
          <path
            fill="#4A4A4A"
            fillRule="evenodd"
            d="M9.47 17.47a.75.75 0 001.06 1.06l6-6a.75.75 0 000-1.06l-6-6a.75.75 0 00-1.06 1.06L14.94 12l-5.47 5.47z"
          ></path>
        </svg>
        <span className="text-lg ">
          {props.adDetail && props.adDetail.category}
        </span>
      </div>

      <div className="info text-left">
        <h2 className="hidden xl:block text-[2.50rem] mt-6">
          {props.adDetail && props.adDetail.title}
        </h2>
        <span className="hidden xl:block opacity-60 text-xl">
          Published in {props.adDetail && props.createdAt.date} at{' '}
          {props.adDetail && props.createdAt.hour} - id:{' '}
          {props.adDetail && props.adDetail._id}
        </span>
      </div>

      <div className="image mt-4 bg-[#E5E5E5] xl:bg-white">
        <img
          src="https://via.placeholder.com/950"
          className="rounded-xl px-64 h-[350px] xl:w-[89%] xl:h-[380px] xl:p-0 "
        ></img>
      </div>

      <div className="options text-left mt-8 px-10 xl:px-0">
        <div className="flex items-center justify-between xl:hidden">
          <span className="block font-normal text-[#4A4A4A] xl:hidden">
            {props.adDetail && props.adDetail.title}
          </span>

          <span>
            {favorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="#9027b0"
                onClick={() => setFavorite(false)}
              >
                <path
                  fill="#9027b0"
                  fillRule="evenodd"
                  d="M12 4.819l.52-.52A6.14 6.14 0 1121.2 12.98l-8.68 8.681a.737.737 0 01-1.042 0l-8.681-8.68a6.139 6.139 0 018.682-8.682l.52.52z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                size="24"
                onClick={() => setFavorite(true)}
              >
                <path
                  fill="#9027b0"
                  fillRule="evenodd"
                  d="M20.141 11.92A4.637 4.637 0 0016.861 4c-1.23 0-2.41.489-3.28 1.36l-.52.52a1.5 1.5 0 01-2.122 0l-.52-.52a4.639 4.639 0 00-6.56 6.56l8.14 8.14 8.142-8.14zM12 4.818l.52-.52A6.14 6.14 0 1121.2 12.98l-8.68 8.681a.737.737 0 01-1.042 0l-8.681-8.68a6.139 6.139 0 018.682-8.682l.52.52z"
                ></path>
              </svg>
            )}
          </span>
        </div>

        <div className="flex items-center gap-4 text-purple-800 font-semibold">
          <h3 className="text-[2.2rem] font-normal text-[#4A4A4A]">
            $ {props.adDetail && props.priceDotted}
          </h3>
          <span className="flex italic font-bold items-center text-[1.35rem] gap-1">
            <svg width="20px" height="20px">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2991 13.8206C16.8902 11.8318 17.7548 9.35945 17.7499 6.8125V2.4375C17.7499 1.85734 17.5194 1.30094 17.1092 0.890704C16.699 0.480468 16.1426 0.25 15.5624 0.25H2.4374C1.85724 0.25 1.30084 0.480468 0.890603 0.890704C0.480367 1.30094 0.249898 1.85734 0.249898 2.4375V6.8125C0.245018 9.35945 1.10961 11.8318 2.70068 13.8206C4.29175 15.8095 6.514 17.1957 8.9999 17.75C11.4858 17.1957 13.7081 15.8095 15.2991 13.8206ZM11.0466 3.13993C11.1457 2.6905 10.8618 2.2458 10.4123 2.14669C9.96288 2.04757 9.51819 2.33156 9.41907 2.78099L9.23002 3.6382C8.78913 3.67429 8.37972 3.78433 8.00179 3.96832C7.53163 4.19298 7.15889 4.50876 6.88357 4.91568C6.60825 5.3226 6.47059 5.77826 6.47059 6.28267C6.47059 6.61329 6.53201 6.91424 6.65484 7.18552C6.78191 7.45256 6.94499 7.67509 7.14407 7.85312C7.34314 8.03114 7.5634 8.19433 7.80483 8.34269C8.04627 8.49104 8.28558 8.6288 8.52278 8.75597C8.76421 8.88313 8.98446 9.01241 9.18354 9.14381C9.38262 9.27521 9.54357 9.43204 9.66641 9.61431C9.79348 9.79233 9.85701 9.99155 9.85701 10.212C9.85701 10.4621 9.77865 10.6846 9.62193 10.8796C9.46521 11.0703 9.27461 11.2123 9.05012 11.3056C8.82986 11.3946 8.60325 11.4391 8.37029 11.4391C7.91284 11.4391 7.50621 11.3373 7.15042 11.1339C7.06233 11.0825 6.97814 11.0285 6.89785 10.9718C6.51853 10.7044 5.9812 10.6516 5.63904 10.9652C5.32056 11.2571 5.28881 11.7568 5.62421 12.029C5.89717 12.2506 6.19624 12.4397 6.52142 12.5962C6.73943 12.6996 6.96537 12.7829 7.19924 12.8463L7.08591 13.3602C6.98679 13.8096 7.27078 14.2543 7.72021 14.3534C8.16965 14.4525 8.61434 14.1685 8.71346 13.7191L8.87993 12.9643C9.26768 12.9136 9.63361 12.8036 9.97773 12.6344C10.4691 12.3928 10.8587 12.0579 11.1468 11.6298C11.439 11.1975 11.5852 10.7206 11.5852 10.1993C11.5852 9.8432 11.5216 9.51894 11.3946 9.22646C11.2717 8.93399 11.1108 8.69026 10.9117 8.49528C10.7126 8.29606 10.4924 8.11592 10.2509 7.95485C10.0137 7.78954 9.77441 7.64542 9.53298 7.5225C9.29578 7.39533 9.07765 7.27241 8.87857 7.15373C8.6795 7.03504 8.51642 6.90364 8.38935 6.75953C8.26652 6.61541 8.2051 6.4607 8.2051 6.29538C8.2051 5.96476 8.34911 5.69772 8.63714 5.49427C8.92516 5.29081 9.25343 5.18908 9.62193 5.18908C9.95232 5.18908 10.2552 5.25902 10.5305 5.39889L10.5603 5.41428C10.9665 5.62746 11.5017 5.6635 11.8278 5.3408C12.1336 5.0381 12.1423 4.53781 11.784 4.29949C11.5846 4.1669 11.368 4.05015 11.1341 3.94925C11.0535 3.91381 10.972 3.88127 10.8897 3.85164L11.0466 3.13993Z"
                fill="#6E0AD6"
              ></path>
            </svg>{' '}
            Secure purchase
          </span>
          <span className="flex items-center text-[1.35rem] gap-1 opacity-90 hover:cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
              <path
                d="M7.85 19.803a1.086 1.086 0 01.913-.457h6.391c.507 0 3.296-2.798 3.652-3.196a24.197 24.197 0 002.283-3.652 1.826 1.826 0 00-1.826-.456c-.808.187-1.283.767-1.826 1.826l-2.09 1.086"
                stroke="#9129b1"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.59 16.607h3.651c1.826 0 1.826-2.283 0-2.283h-2.41c-.383 0-1.096-.913-1.698-.913H7.85a3.195 3.195 0 00-1.826.913L4.198 16.15M3.282 15.236L1 17.518l5.478 5.478 2.282-2.282-5.478-5.478zM3.285 17.52l.913.913"
                stroke="#9129b1"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.747 12.238a3.8 3.8 0 00.06-.653c0-2.392-1.498-4.565-4.11-6.39M12.415 5.194c-2.61 1.826-4.108 3.99-4.108 6.391-.011.653.186 1.292.561 1.826"
                stroke="#9129b1"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M14.698 5.194c-.119.183-.836.274-1.141.274a2.241 2.241 0 01-1.142-.274s-1.324-2.451-1.269-2.547c.48-.859 1.475-.694 2.41-.457a6.3 6.3 0 002.119.265c.023.347-.977 2.74-.977 2.74zM11.959 11.129v.456a.913.913 0 00.913.913h.913a.913.913 0 00.913-.913v-.255a.913.913 0 00-.626-.868l-1.488-.493a.913.913 0 01-.625-.867v-.256a.913.913 0 01.913-.913h.913a.913.913 0 01.913.913v.457M13.328 7.933V7.02M13.328 12.498v.913"
                stroke="#9129b1"
                strokeMiterlimit="10"
              ></path>
            </svg>
            Simulate loan
          </span>
        </div>
      </div>

      <div className="optionDown px-10 xl:px-0 text-left text-[1.35rem]">
        {props.dividedPrice ? (
          <div className="split flex gap-3">
            <span className="font-semibold">
              In up to 12x of ${props.dividedPrice}
            </span>
            <span className="text-purple-800 font-semibold hover:cursor-pointer">
              Installment options
            </span>
          </div>
        ) : null}
        <span className="block xl:hidden opacity-60 text-xl py-12 border-border-gray-200 border-b">
          Published in {props.adDetail && props.createdAt.date} at{' '}
          {props.adDetail && props.createdAt.hour}
        </span>
      </div>

      <div className="description text-left pt-12 pb-9 max-w-[87%] px-10 xl:px-0">
        <div className="block xl:hidden pb-8">
          <h3 className="font-semibold text-3xl">Description</h3>
        </div>
        <div className="content text-2xl">
          {props.adDetail && props.adDetail.description}
        </div>
      </div>

      <div className="buttons hidden xl:flex text-left  gap-10 pb-20">
        <span className="flex gap-4 text-2xl items-center border border-orange-400 text-orange-400 rounded-full px-6 h-[3.75rem] hover:bg-orange-400 hover:text-white hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="currentColor"
            size="24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M20.141 11.92A4.637 4.637 0 0016.861 4c-1.23 0-2.41.489-3.28 1.36l-.52.52a1.5 1.5 0 01-2.122 0l-.52-.52a4.639 4.639 0 00-6.56 6.56l8.14 8.14 8.142-8.14zM12 4.818l.52-.52A6.14 6.14 0 1121.2 12.98l-8.68 8.681a.737.737 0 01-1.042 0l-8.681-8.68a6.139 6.139 0 018.682-8.682l.52.52z"
            ></path>
          </svg>
          Favorite
        </span>
        <span className="flex gap-4 text-2xl items-center border border-orange-400 text-orange-400 rounded-full px-6 h-[3.75rem] hover:bg-orange-400 hover:text-white hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="currentColor"
            size="24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.449 17.792l-5.652-3.294a3.75 3.75 0 110-4.997l5.65-3.298a3.75 3.75 0 11.756 1.295l-5.65 3.299c.128.377.197.782.197 1.203 0 .42-.07.825-.197 1.203l5.654 3.295a3.75 3.75 0 11-.758 1.294zm1.555.17a2.25 2.25 0 10.113-.192.756.756 0 01-.113.191zm-8.034-7.05a.761.761 0 01-.052-.09 2.25 2.25 0 10.052.089zm8.06-4.824a.761.761 0 01.052.09 2.25 2.25 0 10-.052-.089z"
            ></path>
          </svg>
          Share
        </span>
        <span className="flex gap-4 text-2xl items-center border border-orange-400 text-orange-400 rounded-full px-6 h-[3.75rem] hover:bg-orange-400 hover:text-white hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="currentColor"
            size="24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.25 22V3a.75.75 0 01.22-.53c.196-.196.562-.44 1.126-.666C5.47 1.454 6.595 1.25 8 1.25c1.375 0 2.318.27 4.279 1.054 1.79.716 2.596.946 3.721.946 1.22 0 2.156-.17 2.846-.446.226-.09.402-.183.535-.272.064-.042.092-.066.089-.062a.75.75 0 011.28.53v12a.75.75 0 01-.22.53c-.196.196-.562.44-1.126.666-.873.35-1.999.554-3.404.554-1.375 0-2.318-.27-4.279-1.054-1.79-.716-2.596-.946-3.721-.946-1.22 0-2.156.17-2.846.446a3.309 3.309 0 00-.404.191V22a.75.75 0 11-1.5 0zM8 13.25c1.375 0 2.318.27 4.279 1.054 1.79.716 2.596.946 3.721.946 1.22 0 2.156-.17 2.846-.446.158-.064.292-.128.404-.191V4.255c-.85.313-1.926.495-3.25.495-1.375 0-2.318-.27-4.279-1.054C9.931 2.98 9.125 2.75 8 2.75c-1.22 0-2.156.17-2.846.446a3.309 3.309 0 00-.404.191v10.358c.85-.313 1.926-.495 3.25-.495z"
            ></path>
          </svg>
          Report
        </span>
      </div>

      <div className="details w-[50%] text-left pb-12 px-10 xl:px-0">
        <div className="border border-gray-200 w-36 mb-12"></div>
        <div className="title pb-8">
          <h3 className="font-semibold text-3xl">Details</h3>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <span className="block text-xl opacity-70">Category</span>
            <span className="block text-2xl font-semibold text-purple-700">
              {props.adDetail && props.adDetail.category}
            </span>
          </div>
        </div>
      </div>

      {filteredAds.length !== 0 && (
        <div className="px-10 xl:px-0">
          <div className="border border-gray-200 w-36"></div>
          <div className="related text-left pt-12 pb-7">
            <div className="title pb-8">
              <h3 className="font-semibold text-3xl">Related Ads</h3>
            </div>
            <div
              className={`grid gap-10 pb-5  overflow-x-auto grid-cols-[repeat(10,_20rem)] `}
            >
              {filteredAds.map((ad, index) => {
                return (
                  <div className="ads w-full" key={index}>
                    <div className="img h-64 mb-2 w-72">
                      <img
                        src="https://via.placeholder.com/650"
                        className="rounded-xl w-full"
                      ></img>
                    </div>
                    <div className="info flex flex-col gap-1">
                      <span className="block text-[1.3rem]">{ad.title}</span>
                      <span className="block text-2xl font-bold">
                        $ {addDots(ad.price)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <div className="border border-gray-200 w-36 mx-10 xl:mx-0"></div>

      <div className="localization text-left py-12 px-10 xl:px-0">
        <div className="title pb-8">
          <h3 className="font-semibold text-3xl">Localization</h3>
        </div>
        <div className="flex justify-between w-[75%]">
          <div className="flex flex-col gap-1">
            <span className="block  text-xl opacity-70">CEP</span>
            <span className="block text-2xl font-semibold">
              {props.adDetail && props.adDetail.address.code}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="block  text-xl opacity-70">City</span>
            <span className="block text-2xl font-semibold">
              {props.adDetail && props.adDetail.address.city}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="block text-xl opacity-70">District</span>
            <span className="block text-2xl font-semibold">
              {props.adDetail && props.adDetail.address.district}
            </span>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 w-36 mb-24 mx-10 xl:mx-0"></div>
    </div>
  )
}
