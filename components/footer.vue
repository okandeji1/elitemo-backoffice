<template>
  <!-- Footer start -->
  <footer class="footer">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="subscribe-newsletter">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <h3>Subscribe Newsletter</h3>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="Subscribe-box">
              <div class="newsletter-content-wrap">
                <form class="newsletter-form d-flex" action="index.html#">
                  <input class="form-control" type="email" id="email" placeholder="Email Address..." />
                  <button class="btn btn-theme" type="button"><i class="fa fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="footer-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item clearfix">
              <img src="#" alt="Logo" class="f-logo" />
              <div class="s-border"></div>
              <div class="m-border"></div>
              <div class="text">
                <P class="mb-0"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat.</P
                >
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item clearfix">
              <h4>Contact Info</h4>
              <div class="s-border"></div>
              <div class="m-border"></div>
              <ul class="contact-info">
                <li><i class="flaticon-pin"></i>Address: Lekki,</li>
                <li><i class="flaticon-mail"></i><a href="#">info@teiseicar.com</a></li>
                <li><i class="flaticon-phone"></i><a href="tel:+55-417-634-7071">+2347089746564</a></li>
                <li><i class="flaticon-fax"></i>+234908364473</li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div class="footer-item">
              <h4>Useful Links</h4>
              <div class="s-border"></div>
              <div class="m-border"></div>
              <ul class="links">
                <li v-for="(item, index) in linkItem" :key="index">
                  <a :href="item.link"><i class="fa fa-angle-right"></i>{{item.title}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="footer-item clearfix">
              <div class="footer-gallery clearfix">
                <h4>Our Gallery</h4>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul>
                  <li>
                    <img src="img/car/small-car-1.jpg" alt="small-img" />
                  </li>
                  <li>
                    <img src="img/car/small-car-2.jpg" alt="small-img" />
                  </li>
                  <li>
                    <img src="img/car/small-car-3.jpg" alt="small-img" />
                  </li>
                  <li>
                    <img src="img/car/small-car-4.jpg" alt="small-img" />
                  </li>
                  <li>
                    <img src="img/car/small-car-5.jpg" alt="small-img" />
                  </li>
                  <li>
                    <img src="img/car/small-car-6.jpg" alt="small-img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <p class="copy">© 2022 <a href="index.html#">TeiseiCar</a> All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="social-media clearfix">
              <div class="social-list">
                <div class="icon facebook">
                  <div class="tooltip">Facebook</div>
                  <span><i class="fa fa-facebook"></i></span>
                </div>
                <div class="icon twitter">
                  <div class="tooltip">Twitter</div>
                  <span><i class="fa fa-twitter"></i></span>
                </div>
                <div class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <span><i class="fa fa-instagram"></i></span>
                </div>
                <div class="icon youtube mr-0">
                  <div class="tooltip">Youtube</div>
                  <span><i class="fa fa-youtube"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer end -->
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';
const linkItem = [
  {
    title: 'Home',
    link: '/',
    class: 'active'
  },
  {
    title: 'About',
    link: '/about',
    class: ''
  },
  {
    title: 'Car Listing',
    link: '/car-list',
    class: ''
  },
  {
    title: 'Services',
    link: '/services',
    class: ''
  },
  {
    title: 'Blog',
    link: '/blog',
    class: ''
  },
  {
    title: 'Contact',
    link: '/contact',
    class: ''
  },
];

export default {
  computed: {
  },

  data() {
    return {
      linkItem,
    };
  },

  methods: {

    ...mapMutations({}),
  },

  created() {},
};
</script>

<style lang="scss" scoped></style>
