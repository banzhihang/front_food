<view data-event-opts="{{[['tap',[['onClick',['$event']]]]]}}" class="u-image data-v-32babe48" style="{{$root.s0}}" bindtap="__e"><block qq:if="{{!isError}}"><image class="u-image__image data-v-32babe48" style="{{'border-radius:'+(shape=='circle'?'50%':$root.g0)+';'}}" src="{{src}}" mode="{{mode}}" lazy-load="{{lazyLoad}}" show-menu-by-longpress="{{showMenuByLongpress}}" data-event-opts="{{[['error',[['onErrorHandler',['$event']]]],['load',[['onLoadHandler',['$event']]]]]}}" binderror="__e" bindload="__e"></image></block><block qq:if="{{showLoading&&loading}}"><view class="u-image__loading data-v-32babe48" style="{{'border-radius:'+(shape=='circle'?'50%':$root.g1)+';'+('background-color:'+(this.bgColor)+';')}}"><block qq:if="{{$slots.loading}}"><slot name="loading"></slot></block><block qq:else><u-icon vue-id="32baaa92-1" name="{{loadingIcon}}" width="{{width}}" height="{{height}}" class="data-v-32babe48" bind:__l="__l"></u-icon></block></view></block><block qq:if="{{showError&&isError&&!loading}}"><view class="u-image__error data-v-32babe48" style="{{'border-radius:'+(shape=='circle'?'50%':$root.g2)+';'}}"><block qq:if="{{$slots.error}}"><slot name="error"></slot></block><block qq:else><u-icon vue-id="32baaa92-2" name="{{errorIcon}}" width="{{width}}" height="{{height}}" class="data-v-32babe48" bind:__l="__l"></u-icon></block></view></block></view>