<template>
  <div class="container d-sm-flex justify-content-sm-center align-items-sm-center"
    style="padding-top: 80px;padding-bottom: 80px;">
    <div class="row">
      <div class="col-md-12 col-lg-5 col-xl-6 d-xxl-flex flex-column justify-content-xxl-end align-items-xxl-start"
        data-aos="fade-right" data-aos-duration="500">
        <h1>{{ $t('hello') }}</h1>
        <h1 class="text-uppercase text-primary" style="font-size: 55px;font-weight: bold;">Dylan Aumis</h1>
        <p style="font-size: 19px;">{{ $t('intro') }}</p>
        <p style="font-size: 19px;">{{ $t('catchphrase') }}</p>
        <div class="d-xxl-flex flex-column justify-content-xxl-start align-items-xxl-start"
          style="height: auto;width: 100%;"><router-link to="aboutme"
            class="d-xxl-flex justify-content-xxl-center align-items-xxl-center text-decoration-none"
            style="font-weight: bold;">{{ $t('aboutmelink') }}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em"
              height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrow-right">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg></router-link>
          <div
            class="d-flex d-sm-flex d-md-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-end justify-content-xl-end align-items-xl-center justify-content-xxl-end align-items-xxl-center"
            style="font-size: 50px;width: 100%;padding-top: 15px;"><a
              class="d-xxl-flex justify-content-xxl-center align-items-xxl-center text-decoration-none" target="_blank"
              href="https://github.com/Dylonni" style="margin-right: 0px;margin-left: 0px;padding-left: 0px;"><svg
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icon-tabler-brand-github"
                style="font-size: 60px;padding-left: 0px;padding-right: 0px;">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                </path>
              </svg>&nbsp;</a><a
              class="d-xxl-flex justify-content-xxl-center align-items-xxl-center text-decoration-none" target="_blank"
              href="https://www.linkedin.com/in/dylan-aumis/"
              style="padding-left: 0px;margin-right: 0px;margin-left: 0px;"><svg xmlns="http://www.w3.org/2000/svg"
                width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icon-tabler-brand-linkedin d-xxl-flex justify-content-xxl-center align-items-xxl-center"
                style="font-size: 60px;margin-left: 0px;margin-right: 0px;">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>&nbsp;</a><a
              class="d-xxl-flex justify-content-xxl-center align-items-xxl-center text-decoration-none" target="_blank"
              href="https://debonair-boy.surge.sh" style="padding-left: 0px;margin-right: 0px;margin-left: 0px;"><svg
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icon-tabler-file-cv d-xxl-flex justify-content-xxl-center align-items-xxl-center"
                style="font-size: 60px;margin-left: 0px;margin-right: 0px;">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                <path d="M13 11l1.5 6l1.5 -6"></path>
              </svg>&nbsp;</a></div>
        </div>
      </div>
      <div
        class="col-md-12 col-lg-7 col-xl-6 col-xxl-6 d-flex d-sm-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-lg-end align-items-lg-end justify-content-xl-center align-items-xl-end justify-content-xxl-center align-items-xxl-end"
        data-aos="fade-left" data-aos-duration="500" data-aos-delay="200"><img class="img-fluid"
          style="width: 90%;height: 100%;transform: rotateY(180deg);border-radius: 10px;" src="../assets/me.jpg"></div>
    </div>
  </div>
  <div
    class="container d-flex d-md-flex flex-column justify-content-center align-items-center justify-content-md-center align-items-md-center"
    data-aos="fade-up" data-aos-duration="650"
    style="margin-top: 35px;margin-bottom: 35px;width: 100%;border-radius: 10px;padding-top: 130px;padding-bottom: 130px;">
    <div class="row" style="width: 100%;">
      <div
        class="col-lg-12 d-sm-flex d-xxl-flex flex-column justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center"
        style="padding-bottom: 50px;">
        <h1
          class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center justify-content-xxl-center align-items-xxl-center"
          style="color: var(--bs-gray-600);margin-bottom: 0px;">{{ $t('frameworks') }}</h1>
        <p>{{ $t('frameworksdesc') }}</p>
      </div>
    </div>
    <div
      class="row d-flex d-lg-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center"
      style="width: 100%;margin-left: 0px;margin-right: 0px;">
      <div
        class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-center align-items-center"
        style="padding-left: 0px;padding-right: 0px;">
        <div
          class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center"
          style="width: 100%;">
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/shell.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/c.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/c++.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-center align-items-center"
        style="padding-left: 0px;padding-right: 0px;">
        <div
          class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center"
          style="width: 100%;">
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/grafana.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/prometheus.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-right: 15px;margin-left: 15px;"><img src="../assets/docker.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-center align-items-center"
        style="padding-left: 0px;padding-right: 0px;">
        <div
          class="d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center"
          style="width: 100%;">
          <div style="margin-left: 15px;margin-right: 15px;"><img src="../assets/js.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-left: 15px;margin-right: 15px;"><img src="../assets/nodejs.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
          <div style="margin-left: 15px;margin-right: 15px;"><img src="../assets/vjs.webp"
              style="width: 110px;border-radius: 0px;margin-right: 0px;margin-left: 0px;"></div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container d-flex d-md-flex flex-column justify-content-center align-items-center justify-content-md-center align-items-md-center"
    data-aos="fade-up" data-aos-duration="650"
    style="width: 100%;padding-top: 20px;padding-bottom: 20px;margin-top: 0px;margin-bottom: 0px;">
    <div class="row" style="width: 100%;">
      <div
        class="col-lg-12 d-sm-flex d-xxl-flex justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center"
        style="padding-top: 0px;padding-bottom: 20px;">
        <h1
          class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center justify-content-xxl-center align-items-xxl-center"
          style="color: var(--bs-gray-600);margin-bottom: 0px;padding-bottom: 20px;">{{ $t('experiences') }}</h1>
      </div>
    </div>
    <div
      class="row d-flex d-lg-flex d-xxl-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center"
      style="width: 100%;margin-left: 0px;margin-right: 0px;padding-top: 30px;padding-bottom: 30px;">
      <div class="col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="card" style="box-shadow: 4px 0px 7px var(--bs-gray-400); min-height: 380px; max-height: 380px;">
          <div class="card-body d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-start">
            <div>
              <h4>{{ $t('devunit') }}</h4>
              <h6 class="text-muted mb-2">Dev Unit Agency</h6>
            </div>
            <div
              class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
              style="width: 100%;"><img src="../assets/DevUnit.webp" width="225" height="240"></div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="card" style="box-shadow: 4px 0px 7px var(--bs-gray-400); min-height: 380px; max-height: 380px;">
          <div class="card-body d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-start">
            <div>
              <h4>{{ $t('sdl') }}</h4>
              <h6 class="text-muted mb-2">SDL</h6>
            </div>
            <div
              class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
              style="width: 100%;"><img src="../assets/samsung.webp" width="225" height="240"></div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="card" style="box-shadow: 4px 0px 8px var(--bs-gray-400); min-height: 380px; max-height: 380px;">
          <div class="card-body d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-start"
            style="padding-bottom: 26px;">
            <div style="margin-bottom: 31px">
              <h4>{{ $t('mc') }}</h4>
              <h6 class="text-muted mb-2">Helpline</h6>
            </div>
            <div
              class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
              style="width: 100%;"><img src="../assets/cult.webp" width="225" height="195"
                style="width: 225px;padding-top: 0px;padding-bottom: 0px;"></div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="card" style="box-shadow: 4px 0px 7px var(--bs-gray-400); min-height: 380px; max-height: 380px;">
          <div class="card-body d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-start">
            <div>
              <h4>{{ $t('yourcompany') }}</h4>
              <h6 class="text-muted mb-2">{{ $t('yourcompanydesc') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em"
                  height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-mood-smile"
                  style="margin-left: 5px;font-size: 17px;">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M9 10l.01 0"></path>
                  <path d="M15 10l.01 0"></path>
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                </svg></h6>
            </div>
            <div
              class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
              style="width: 100%;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icon-tabler-building"
                style="font-size: 240px;color: var(--bs-light-bg-subtle);background: linear-gradient(-50deg, #b1deff, rgba(255,255,255,0));border-radius: 10px;">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
              </svg></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" data-aos="fade-up" data-aos-duration="650" style="padding-top: 150px;padding-bottom: 150px;">
    <div class="row" style="width: 100%;">
      <div
        class="col-lg-12 col-xxl-12 d-sm-flex d-xxl-flex flex-column justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center"
        style="padding-top: 0px;padding-bottom: 20px;">
        <h1
          class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center justify-content-xxl-center align-items-xxl-center"
          style="color: var(--bs-gray-600);margin-bottom: 0px;">{{ $t('projects') }}</h1>
        <p
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
          {{ $t('projectsdesc') }}</p>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="transcend"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 75%), rgba(0,0,0,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xl-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;Transcendence</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center "
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTranscendence"
            href="#collapseTranscendence" role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseTranscendence">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center justify-content-lg-center align-items-lg-start flex-xl-row align-items-xl-start justify-content-xxl-center align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(0,0,0,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 430px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/pong.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('transcendence1') }} <br><br> {{ $t('transcendence2') }}<br><br> {{ $t('transcendence3') }}
                    </p>
                  </div>
                  <div class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/django.webp"
                        style="width: 15px;margin-right: 5px;margin-bottom: 2px;">Django</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/docker.webp"
                        style="width: 25px;margin-right: 5px;margin-bottom: 2px;height: 20px;" width="15"
                        height="15">Docker</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;padding-left: 20px;"><img
                        src="../assets/pstgsql.png" style="width: 20px;margin-right: 5px;margin-bottom: 2px;" width="30"
                        height="16">PostgreSQL</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/js.webp" style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;"
                        width="16" height="16">JavaScript</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/python.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Python</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/grafana.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Grafana</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/prometheus.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Prometheus</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/vault_logo_icon_249285.png"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Vault</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/nginx.webp"
                        style="width: 20px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Nginx</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/42_ft_transcendence" target="_blank"
                        style="margin-left: 10px;">{{ $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg"
                          width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                          fill="none" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icon-tabler-brand-github" style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="justcook"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 75%), rgba(96,0,255,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;Just Cook</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseJustCook-1"
            href="#collapseJustCook-1" role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseJustCook-1">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-start align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-start align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(96,0,255,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 430px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/Screenshot6.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('justcook1') }} <br><br> {{ $t('justcook2') }}</p>
                  </div>
                  <div class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/vjs.webp" style="width: 15px;margin-right: 5px;margin-bottom: 2px;" width="15"
                        height="15">Vue JS</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/vuetify.png" style="width: 15px;margin-right: 5px;margin-bottom: 2px;" width="15"
                        height="15">Vuetify</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/pngwing.com.webp"
                        style="width: 40px;margin-bottom: 2px;height: 20px;margin-right: 0px;" width="15"
                        height="15">Express JS</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/nodejs.webp"
                        style="width: 30px;margin-right: 5px;margin-bottom: 2px;height: 20px;" width="15"
                        height="15">Node JS</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/sqlite33.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">SQLite</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/js.webp" style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;"
                        width="16" height="16">JavaScript</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/JustCook" target="_blank" style="margin-left: 10px;">{{
                        $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-github"
                          style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="adshutdown"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 82%), rgba(21,210,222,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;Advanced Shutdown</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseAdvancedShutdown"
            href="#collapseAdvancedShutdown" role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseAdvancedShutdown">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-start align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(21,210,222,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 350px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/Advanced_Shutdown.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('as1') }}<br><br>{{ $t('as2') }}<br>{{ $t('as3') }}.</p>
                  </div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/vjs.webp" style="width: 15px;margin-right: 5px;margin-bottom: 2px;">Vue
                      JS</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/vuetify.png"
                        style="width: 20px;margin-right: 5px;margin-bottom: 2px;height: 20px;" width="15"
                        height="15">Vuetify</span><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/electron.webp"
                        style="width: 20px;margin-right: 5px;margin-bottom: 2px;height: 20px;" width="15"
                        height="15">Electron</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/js.webp" style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;"
                        width="16" height="16">JavaScript</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/nodejs.webp"
                        style="width: 25px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Node JS</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/Advanced-Shutdown" target="_blank"
                        style="margin-left: 10px;">{{ $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg"
                          width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                          fill="none" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icon-tabler-brand-github" style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="solong"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 82%), rgba(222,21,21,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;So Long !</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseSoLong" href="#collapseSoLong"
            role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseSoLong">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-start align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(222,21,21,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 430px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/amogus.png">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('solong1') }}<br><br>{{ $t('solong2') }}.<br>{{ $t('solong3') }}<br><br>{{ $t('solong4') }}
                    </p>
                  </div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/c.webp" style="width: 15px;margin-right: 5px;margin-bottom: 2px;">C</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/shell.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Make</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/42_so_long" target="_blank" style="margin-left: 10px;">{{
                        $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-github"
                          style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="irc"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 82%), rgba(10,88,202,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;IRC Server</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseIrc" href="#collapseIrc"
            role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseIrc">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-start align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(10,88,202,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 430px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/irssi_screen.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('irc1') }}<br><br>{{ $t('irc2') }}<br><br>{{ $t('irc3') }}</p>
                  </div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/c++.webp"
                        style="width: 15px;margin-right: 5px;margin-bottom: 2px;">C++</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/shell.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Make</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/42_ft_irc" target="_blank" style="margin-left: 10px;">{{
                        $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-github"
                          style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="minishell"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 82%), rgba(198,202,10,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;Minishell</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseMinishell" href="#collapseMinishell"
            role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseMinishell">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-center align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(198,202,10,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 400px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/minishell_prg.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('minishell1') }}<br><br>{{ $t('minishell2') }}<br><br>{{ $t('minishell3') }}</p>
                  </div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/c.webp" style="width: 15px;margin-right: 5px;margin-bottom: 2px;">C</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/shell.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Make</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/42_minishell" target="_blank" style="margin-left: 10px;">{{
                        $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-github"
                          style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-lg-flex justify-content-lg-center align-items-lg-center"
      style="padding-bottom: 60px;margin-left: 0px;margin-right: 0px;padding-top: 0px;">
      <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex"
        style="border-radius: 20px;padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);border-bottom-left-radius: 10px;">
        <div
          class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-start align-items-xxl-center"
          style="width: 100%;height: 130px;">
          <div
            class="d-flex d-lg-flex justify-content-center align-items-center align-items-lg-center justify-content-xxl-center"
            style="position: relative;width: 100%;height: 100%;">
            <div class="cubed"></div>
            <div class="d-xxl-flex justify-content-xxl-center align-items-xxl-center"
              style="position: absolute;background: linear-gradient(140deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 82%), rgba(10,202,98,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;margin-top: 0px;">
            </div>
          </div>
          <div
            class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"
            style="width: 100%;height: 100%;">
            <h3 style="color: var(--bs-gray-700);">&nbsp;Cub3D</h3>
          </div>
        </div>
      </div>
      <div class="col" style="padding-left: 0px;padding-right: 0px;margin-top: 0px;margin-bottom: 0px;">
        <div><a
            class="arrowdown btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
            data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseCubed" href="#collapseCubed"
            role="button"
            style="width: 100%;height: 100%;background: rgba(13,110,253,0);border-style: none;padding-top: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-chevron-compact-down"
              style="position: absolute;font-size: 45px;color: var(--bs-gray-700);">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 11l8 3l8 -3"></path>
            </svg></a>
          <div class="collapse" id="collapseCubed">
            <div class="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-xxl-center align-items-xxl-center"
              style="padding-left: 0px;padding-right: 0px;box-shadow: 2px 0px 6px var(--bs-gray-500);padding-top: 0px;padding-bottom: 0px;border-radius: 20px;margin-bottom: 0px;">
              <div
                class="d-flex d-xxl-flex flex-column justify-content-center align-items-center align-items-sm-center flex-lg-row justify-content-lg-center align-items-lg-start align-items-xl-start justify-content-xxl-center align-items-xxl-start collapse"
                style="width: 100%;height: 100%;padding-top: 0px;padding-bottom: 0px;">
                <div
                  class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                  style="width: 100%;height: 100%;position: relative;margin-top: 0px;padding-top: 9px;padding-bottom: 9px;">
                  <div
                    class="d-md-flex d-xxl-flex justify-content-md-center align-items-md-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                    style="position: absolute;background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 34%), rgba(10,202,98,0.3);width: 100%;height: 100%;margin-left: 0px;border-radius: 15px;padding-top: 0px;padding-bottom: 0px;margin-top: 0px;">
                  </div><img class="img-fluid"
                    style="width: 400px;height: 100%;border-radius: 10px;z-index: 999;padding-top: 0px;margin-top: 15px;"
                    src="../assets/cubednew.webp">
                </div>
                <div
                  style="width: 100%;height: 100%;padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 18px;margin-top: 0px;">
                  <div style="width: 100%;">
                    <p
                      style="padding-top: 14px;padding-bottom: 14px;font-size: 17px;margin-bottom: 20px;padding-left: 20px;padding-right: 20px;">
                      {{ $t('cub3d1') }}<br><br>{{ $t('cub3d2') }}<br>{{ $t('cub3d3') }}<br><br>{{ $t('cub3d4') }}
                    </p>
                  </div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center flex-wrap"
                    style="padding-bottom: 20px;padding-top: 20px;"><span
                      style="margin-left: 0px;padding-left: 20px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/c.webp" style="width: 15px;margin-right: 5px;margin-bottom: 2px;">C</span><span
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;border-radius: 20px;margin-right: 5px;border: 1px solid var(--bs-gray-600);padding-left: 20px;margin-top: 5px;margin-bottom: 5px;"><img
                        src="../assets/shell.webp"
                        style="width: 16px;margin-right: 5px;margin-bottom: 2px;height: 16px;" width="16"
                        height="16">Make</span></div>
                  <div
                    class="d-flex d-sm-flex d-md-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"
                    style="width: 100%;padding-bottom: 0px;padding-top: 20px;"><span
                      class="d-lg-flex justify-content-lg-center align-items-lg-center"
                      style="margin-left: 0px;padding-right: 20px;padding-top: 4px;padding-bottom: 4px;margin-right: 5px;padding-left: 6px;"><a
                        href="https://github.com/Dylonni/42_cub3D" target="_blank" style="margin-left: 10px;">{{
                        $t('githublink') }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-github"
                          style="font-size: 20px;margin-left: 5px;">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                          </path>
                        </svg></a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="position-relative py-4 py-xl-5" style="width: 100%;margin-top: 0px;margin-bottom: 0px;">
    <div class="container">
      <div
        class="row d-flex d-sm-flex justify-content-center align-items-start justify-content-sm-center align-items-sm-start align-items-md-start align-items-lg-start"
        style="width: 100%;">
        <div
          class="col-sm-8 col-md-12 col-lg-12 col-xl-8 col-xxl-7 d-lg-flex justify-content-lg-center align-items-lg-center">
          <div class="card mb-5" style="border-style: none;width: 100%;">
            <div class="card-body" style="border-style: none;padding-left: 7px;padding-right: 7px;padding-top: 0px;">
              <h2 class="d-flex justify-content-center align-items-center mb-4"
                style="border-color: var(--bs-gray-600);color: var(--bs-gray-600);padding-top: 0px;margin-bottom: 14px;padding-bottom: 20px;">
                {{ $t('contact') }}</h2>
              <div
                class="d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                style="width: 100%;">
                <div style="width: 100%;margin-top: 14px;margin-bottom: 14px;"><a class="text-decoration-none"
                    href="mailto:aumis.dylan@gmail.com">
                    <h5 style="width: 100%;color: var(--bs-primary);margin-top: 0px;margin-bottom: 0px;"><svg
                        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icon-tabler-mail"
                        style="margin-right: 12px;font-size: 40px;color: var(--bs-body-color);">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z">
                        </path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>aumis.dylan@gmail.com</h5>
                  </a></div>
                <div style="width: 100%;margin-top: 14px;margin-bottom: 14px;">
                  <h5 style="color: var(--bs-primary);margin-top: 0px;margin-bottom: 0px;"><svg
                      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      class="icon icon-tabler icon-tabler-phone"
                      style="margin-right: 12px;font-size: 40px;color: var(--bs-body-color);">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                      </path>
                    </svg>+33 6 63 17 55 31</h5>
                </div>
              </div>
              <div
                class="d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center"
                style="width: 100%;">
                <div style="width: 100%;margin-top: 14px;margin-bottom: 14px;"><a class="text-decoration-none"
                    target="_blank" href="https://www.linkedin.com/feed/">
                    <h5 style="width: 100%;color: var(--bs-primary);margin-top: 0px;margin-bottom: 0px;"><svg
                        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icon-tabler-brand-linkedin"
                        style="margin-right: 12px;font-size: 40px;color: var(--bs-body-color);">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                        </path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>{{ $t('linkedin') }}</h5>
                  </a></div>
                <div style="width: 100%;margin-top: 14px;margin-bottom: 14px;"><a class="text-decoration-none"
                    target="_blank" href="https://debonair-boy.surge.sh">
                    <h5 style="color: var(--bs-primary);margin-top: 0px;margin-bottom: 0px;"><svg
                        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icon-tabler-file-cv"
                        style="margin-right: 12px;font-size: 40px;color: var(--bs-body-color);">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                        <path d="M13 11l1.5 6l1.5 -6"></path>
                      </svg>{{ $t('cv') }}</h5>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.arrowdown {
  margin-top: 10px;
  margin-bottom: 10px;
}

.transcend {
  position: absolute;
  background: url('../assets/pong_ico.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.justcook {
  position: absolute;
  background: url('../assets/Just_Cook.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.adshutdown {
  position: absolute;
  background: url('../assets/icon.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.solong {
  position: absolute;
  background: url('../assets/amogus_red.png') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.irc {
  position: absolute;
  background: url('../assets/irc.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.minishell {
  position: absolute;
  background: url('../assets/minishell.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}

.cubed {
  position: absolute;
  background: url('../assets/cube3d.webp') center / cover no-repeat;
  color: #ffffff;
  width: 40%;
  height: 100%;
  margin-left: 0px;
}
</style>