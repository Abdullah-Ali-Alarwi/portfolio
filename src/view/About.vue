<template>

<main :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" class=" m-[0px] md:m-[50px] mb-[100px]">
    <div> 
        <span class="text-[30px] text-cyan-200"> {{ $t('AboutMe') }}
        </span>
      <h3 class="text-[22px] m-2 break-all

 ">
        {{ $t('AboutMeText') }}      </h3>
    </div>
</main>
</template>