import React from "react";

import { Button, Img, Text } from "components";

const Page = () => {
  return (
    <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
      <div className="h-[754px] md:h-[786px] md:px-5 relative w-full">
        <Img
          className="h-[754px] m-auto object-cover w-full"
          src="images/img_rectangle1.png"
          alt="rectangleOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[125px] inset-x-[0] justify-start mx-auto top-[5%] w-[84%]">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-end md:ml-[0] ml-[462px] w-[62%] md:w-full">
            <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtManropeBold14"
              >
                Çözüm ve Hizmetler
              </Text>
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtManropeBold14"
              >
                Ürünler
              </Text>
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtManropeBold14"
              >
                Teknolojiler
              </Text>
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtManropeBold14"
              >
                İnsan Kaynakları
              </Text>
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtManropeBold14"
              >
                Kurumsal
              </Text>
            </div>
            <Button className="bg-red-500 cursor-pointer font-bold min-w-[91px] py-2.5 rounded-[5px] text-center text-sm text-white-A700">
              İletişim
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-[56%] md:w-full">
            <Text
              className="leading-[82.00px] md:text-5xl text-[64px] text-black-900"
              size="txtManropeExtraBold64"
            >
              <>
                Bilgi Teknolojilerinde
                <br />
                23 Yıllık Tecrübe
              </>
            </Text>
            <Text
              className="leading-[36.00px] mt-5 text-black-900 text-xl tracking-[0.20px] w-[98%] sm:w-full"
              size="txtManropeRegular20"
            >
              Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
              farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
              Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
            </Text>
            <div className="bg-white-A700 flex flex-row gap-[150px] items-center justify-end mt-[50px] p-1.5 rounded-lg w-[76%] md:w-full">
              <Text
                className="text-base text-black-900_66 tracking-[0.20px]"
                size="txtManropeRegular16"
              >
                Mail bültenimize kayıt ol
              </Text>
              <Button className="bg-red-500_01 cursor-pointer font-bold min-w-[136px] py-[19px] rounded-lg text-base text-center text-white-A700 tracking-[0.20px]">
                Kayıt Ol
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start max-w-[1153px] mt-[124px] mx-auto md:px-5 w-full">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtManropeExtraBold36"
        >
          Kalite ve Süreç Yönetimi
        </Text>
        <Text
          className="leading-[39.00px] mt-[31px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.20px] w-[87%] sm:w-full"
          size="txtManropeRegular24"
        >
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </Text>
        <div className="flex flex-col items-center justify-start mt-[90px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row items-center justify-between w-[82%] md:w-full">
              <Img
                className="h-[77px]"
                src="images/img_clock.svg"
                alt="clock"
              />
              <div className="h-[76px] relative w-[9%]">
                <div className="absolute bg-deep_purple-A200 h-[45px] left-[0] rounded-[22px] top-[9%] w-[45px]"></div>
                <Img
                  className="absolute h-[76px] inset-y-[0] my-auto right-[0] w-[76px]"
                  src="images/img_star.svg"
                  alt="star"
                />
              </div>
              <div className="h-[76px] relative w-[10%]">
                <div className="absolute bg-light_blue-300 h-[45px] right-[0] rounded-[22px] top-[9%] w-[45px]"></div>
                <Img
                  className="absolute h-[76px] inset-y-[0] left-[0] my-auto w-[76px]"
                  src="images/img_mail.svg"
                  alt="mail"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-[91%] md:w-full">
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtManropeExtraBold24"
              >
                Döküman Analizi
              </Text>
              <Text
                className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtManropeExtraBold24"
              >
                Kabul ve Değerlendirme
              </Text>
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtManropeExtraBold24"
              >
                İş Kuralları Analizi
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-1 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[83px] w-4/5 md:w-full">
                <Img
                  className="h-[76px] mt-2 w-[77px]"
                  src="images/img_group11.svg"
                  alt="groupEleven"
                />
                <div className="h-[78px] md:h-[82px] mb-1.5 relative w-[10%]">
                  <div className="absolute bg-red-A200 h-[45px] right-[0] rounded-[22px] top-[0] w-[45px]"></div>
                  <Img
                    className="absolute h-[76px] inset-y-[0] left-[0] my-auto w-[76px]"
                    src="images/img_chartpieslice.svg"
                    alt="chartpieslice"
                  />
                </div>
                <div className="md:h-[73px] h-[78px] mb-1.5 relative w-[8%]">
                  <div className="absolute bg-orange-300 h-[45px] right-[4%] rounded-[22px] top-[0] w-[45px]"></div>
                  <Img
                    className="absolute bottom-[0] h-[67px] inset-x-[0] mx-auto w-[67px]"
                    src="images/img_car.svg"
                    alt="car"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[7px] w-[90%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtManropeExtraBold24"
                >
                  Akış Diyagramları
                </Text>
                <Text
                  className="md:ml-[0] ml-[236px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtManropeExtraBold24"
                >
                  Paydaş Analizi
                </Text>
                <Text
                  className="md:ml-[0] ml-[261px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtManropeExtraBold24"
                >
                  Prototipleme
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-1 w-full">
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
                <Text
                  className="leading-[28.00px] text-black-900 text-center text-lg tracking-[0.20px]"
                  size="txtManropeRegular18"
                >
                  Ante vulputate ut at accumsan et. Feugiat at tempus, est
                  senectus amet, elementum.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500_01 flex flex-col items-center justify-start mt-[140px] w-full">
        <div className="h-[376px] md:h-[716px] md:px-5 relative w-full">
          <div className="flex flex-col md:gap-10 gap-16 h-full items-center justify-start m-auto w-[76%]">
            <div className="flex flex-col gap-2 items-start justify-start max-w-[836px] w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-auto"
                  size="txtManropeExtraBold48"
                >
                  Test Yönetimiyle Neler Sağlıyoruz?
                </Text>
              </div>
              <Text
                className="text-center text-lg text-white-A700 w-full"
                size="txtManropeRegular18WhiteA700"
              >
                IoT Destekli Çözümler
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="leading-[31.00px] text-lg text-white-A700"
                size="txtManropeBold18"
              >
                <>
                  Yazılım Kalitesini
                  <br />
                  Arttırıyoruz
                </>
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_rewind.svg"
                alt="rewind"
              />
              <Text
                className="leading-[31.00px] text-lg text-white-A700"
                size="txtManropeBold18"
              >
                <>
                  Olası Hataları Önceden
                  <br />
                  Belirliyoruz
                </>
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_rewind.svg"
                alt="rewind_One"
              />
              <Text
                className="leading-[31.00px] text-lg text-white-A700"
                size="txtManropeBold18"
              >
                <>
                  Oluşabilecek Riskleri
                  <br />
                  Önlüyoruz
                </>
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_rewind.svg"
                alt="rewind_Two"
              />
              <Text
                className="leading-[31.00px] text-lg text-white-A700"
                size="txtManropeBold18"
              >
                <>
                  Zaman ve Maliyetten
                  <br />
                  Tasarruf Sağlıyoruz
                </>
              </Text>
            </div>
          </div>
          <Img
            className="absolute h-[376px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
      </div>
      <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1197px] mt-40 mx-auto md:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="leading-[76.00px] md:text-5xl text-[64px] text-blue_gray-900 w-full"
              size="txtManropeBold64"
            >
              Kalite ve Süreç Yönetimi
            </Text>
            <Text
              className="leading-[32.00px] mt-10 text-base text-gray-600 w-[87%] sm:w-full"
              size="txtManropeRegular16Gray600"
            >
              Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
              sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
              Projelerinizin yönetimine destek olmak, zayıf olduğunu
              düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği
              olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek
              için yanınızdayız.
            </Text>
            <Button className="bg-red-500_01 cursor-pointer font-semibold mt-20 py-3.5 rounded-lg text-center text-sm text-white-A700 w-40">
              Keşfet
            </Button>
          </div>
          <Img
            className="h-[480px] md:h-auto object-cover rounded-lg"
            src="images/img_illustration.png"
            alt="illustration"
          />
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Img
            className="h-[480px] md:h-auto object-cover rounded-lg"
            src="images/img_illustration_480x504.png"
            alt="illustration_One"
          />
          <div className="flex flex-col items-start justify-start">
            <Text
              className="leading-[76.00px] md:text-5xl text-[64px] text-blue_gray-900 w-full"
              size="txtManropeBold64"
            >
              Test Yönetimi ve Analizi
            </Text>
            <Text
              className="leading-[32.00px] mt-10 text-base text-gray-600 w-[96%] sm:w-full"
              size="txtManropeRegular16Gray600"
            >
              Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını
              önlemek amacıyla gerçekleştirdiğimiz testleri her proje
              aşamasında manuel ya da test otomasyonu ile dikkatle
              uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek
              kalitede yazılım testleri hizmeti ile baştan sona güvenli,
              kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.
            </Text>
            <Button className="bg-red-500_01 cursor-pointer font-semibold mt-20 py-3.5 rounded-lg text-center text-sm text-white-A700 w-40">
              Keşfet
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col gap-12 items-start justify-start mt-40 md:px-10 sm:px-5 px-[165px] py-[59px] w-auto md:w-full">
        <div className="flex flex-col gap-[5px] items-start justify-start max-w-[1110px] mx-auto w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-auto"
              size="txtManropeExtraBold48Gray900"
            >
              Referanslarımız
            </Text>
          </div>
          <Text
            className="text-center text-gray-900 text-lg w-full"
            size="txtManropeMedium18"
          >
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[946px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="bg-white-A700 flex flex-col items-center justify-end p-3.5 rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[67px] md:h-auto object-cover w-[95%]"
                src="images/img_image6.png"
                alt="imageSix"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[17px] rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[61px] md:h-auto object-cover w-[90%]"
                src="images/img_image5.png"
                alt="imageFive"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[37px] my-1.5"
                src="images/img_bookmyshowlogo.svg"
                alt="bookmyshowlogo"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[15px] rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[66px] md:h-auto object-cover w-[95%]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[15px] rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[66px] md:h-auto object-cover w-[95%]"
                src="images/img_image3.png"
                alt="imageThree"
              />
            </div>
            <Button
              className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[170px] px-[25px] py-[35px] rounded-[16px] shadow-bs"
              rightIcon={
                <Img
                  className="h-4 ml-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-semibold sm:px-5 text-base text-center text-red-500_01">
                Tümünü Gör
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[18px] rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[59px] md:h-auto object-cover w-[89%]"
                src="images/img_image4.png"
                alt="imageFour"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs w-full">
              <Img
                className="h-[34px]"
                src="images/img_olalogo.svg"
                alt="olalogo"
              />
            </div>
          </div>
          <Img
            className="h-24 w-[170px]"
            src="images/img_col5.svg"
            alt="colFive"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start mt-40 md:px-5 w-[45%] md:w-full">
        <div className="md:h-[120px] h-[185px] relative w-2/5">
          <Text
            className="absolute bottom-[0] inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-max"
            size="txtManropeExtraBold48Black900"
          >
            Bize Ulaşın
          </Text>
          <div className="bg-red-500_01 h-[61px] ml-auto mr-[72px] mt-1.5 rounded-[30px] w-[61px]"></div>
          <Img
            className="absolute h-[120px] inset-x-[0] mx-auto top-[0] w-[120px]"
            src="images/img_users.svg"
            alt="users"
          />
        </div>
        <Text
          className="mt-[3px] text-black-900 text-center text-lg"
          size="txtManropeMedium18Black900"
        >
          Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
          irtibata geçin.
        </Text>
        <Button className="bg-red-500 cursor-pointer font-semibold min-w-[204px] mt-[30px] py-[18px] rounded-lg text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
          Bize Ulaşın
        </Button>
      </div>
      <footer className="bg-red-A200_01 flex font-inter items-center justify-center mt-40 md:px-5 w-full">
        <div className="flex flex-col items-center justify-center mb-[70px] ml-[104px] mr-[98px] mt-20 w-[86%]">
          <div className="flex flex-col gap-[54px] items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start w-[84%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[3px] w-[18%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtInterBold16"
                >
                  Çözüm ve Hizmetler
                </Text>
                <ul className="flex flex-col gap-9 items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Yazılım Geliştirme</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Outsourcing</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        Kalite ve Süreç Yönetimi
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Danışmanlık</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        IoT Destekli Çözümler
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[35px] items-start justify-start w-1/4 md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtInterBold16"
                >
                  Ürünler
                </Text>
                <ul className="flex flex-col gap-[34px] items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        Eğitim Yönetim Sistemi
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        İnsan Sermayesi Yönetim Sistemi
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        Müşteri İlişkileri Yönetim Sistemi
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">
                        İçerik Yönetim Sistemi
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-[15%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtInterBold16"
                >
                  Kurumsal
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Hakkımızda</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[37px] text-base text-gray-300"
                    >
                      <Text size="txtInterRegular16">
                        Belge ve Yetkinlikler
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[34px] text-base text-gray-300"
                    >
                      <Text size="txtInterRegular16">İş Ortakları</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-[15%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtInterBold16"
                >
                  İletişim
                </Text>
                <ul className="flex flex-col gap-[37px] items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Bilgi İstek Formu</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-gray-300">
                      <Text size="txtInterRegular16">Uzman Talep Formu</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="mb-1 sm:mt-0 mt-[7px] text-base text-white-A700"
                size="txtInterRegular16WhiteA700"
              >
                © Copyright 2010-2021 - Can Çevik
              </Text>
              <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[15%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_linkedinlogo.svg"
                  alt="linkedinlogo"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <div className="flex flex-col h-8 items-center justify-start w-8">
                  <Img
                    className="h-8 w-8"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
