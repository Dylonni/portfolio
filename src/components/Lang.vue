<template>
	<div class="container" style="padding-bottom: 20px;padding-top: 20px;">
		<div class="row d-xl-flex justify-content-xl-center align-items-xl-center">
      		<div class="col-xl-12 col-xxl-12 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-end align-items-lg-center justify-content-xl-end align-items-xl-center justify-content-xxl-end align-items-xxl-center">
        		<div class="d-flex d-lg-flex d-xl-flex d-xxl-flex flex-row justify-content-start align-items-center justify-content-sm-center justify-content-md-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center" style="margin-top: 0px;width: 180px;">
					<a class="btn btn-primary d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseLang" href="#collapseLang" role="button" style="background: rgba(255,255,255,0);width: 65px;height: 65px;margin-left: 5px;margin-right: 5px;border-style: none;">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-world text-dark" style="width: 100%;height: 100%;">
              				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              				<path d="M3.6 9h16.8"></path>
              				<path d="M3.6 15h16.8"></path>
              				<path d="M11.5 3a17 17 0 0 0 0 18"></path>
              				<path d="M12.5 3a17 17 0 0 1 0 18"></path>
            			</svg>
					</a>
         			<div class="collapse show collapse-horizontal" id="collapseLang">
						<a class="link-dark text-decoration-none" @click="$i18n.locale = `FR`"  style="cursor: pointer;margin-left: 5px;margin-right: 5px;font-size: 20px;">FR</a>
						<a class="link-dark text-decoration-none" @click="$i18n.locale = `EN`"  style="cursor: pointer;margin-left: 5px;margin-right: 5px;font-size: 20px;">EN</a>
					</div>
        		</div>
      		</div>
    	</div>
  </div>
</template>

<script>

export default {
	name: 'Lang'
}

</script>