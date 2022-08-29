<template>
  <div v-if="car">
    <!-- Sub banner start -->
    <lazy-car-banner title="Car Detail"></lazy-car-banner>
    <!-- Sub Banner end -->

    <!-- Car details page start -->
    <div class="car-details-page content-area-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-xs-12">
            <div class="slide car-details-section cds-2">
              <!-- Heading start -->
              <div class="heading-car clearfix">
                <div class="pull-left">
                  <h3>{{ car.make }}</h3>
                  <p><i class="flaticon-pin"></i>{{car.specifications.location}}</p>
                </div>
              </div>
              <div class="product-slider-box cds-2 clearfix mb-30">
                <div class="product-img-slide">
                  <div class="slider-for">
                    <!-- FIXME: loop cars here and click event -->
                    <!-- <div v-for="img in car.images">
                      <img :src="img" class="img-fluid w-100" alt="slider-car" />
                    </div> -->
                    <div>
                      <img :src="car.images[0]" class="img-fluid w-100" alt="slider-car" />
                    </div>
                  </div>
                  <div class="slider-nav">
                    <div class="thumb-slide" v-for="img in car.images">
                      <!-- FIXME: loop cars here -->
                      <img :src="img" class="img-fluid" alt="small-car" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Advanced search start -->
              <div class="widget-2 advanced-search bg-grea-2 as-2">
                <h3 class="sidebar-title">Refine Your Search</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul>
                  <li><span>Make</span>{{ car.make }}</li>
                  <li><span>Model</span>{{ car.model }}</li>
                  <li><span>Body Style</span>{{ car.specifications.bodyStyle }}</li>
                  <li><span>Year</span>{{ car.specifications.year }}</li>
                  <li><span>Condition</span>{{ car.specifications.condition }}</li>
                  <li><span>Mileage</span>{{ car.specifications.mileage }}</li>
                  <li><span>Transmission</span>{{ car.specifications.transmission }}</li>
                  <li><span>Engine</span>{{ car.specifications.engine }}</li>
                  <li><span>No. of Gears:</span>{{ car.specifications.gears }}</li>
                  <li><span>Location</span>{{car.specifications.location}}</li>
                  <li><span>Fuel Type</span>{{ car.specifications.fuelType }}</li>
                </ul>
              </div>
              <!-- Tabbing box start -->
              <div class="tabbing tabbing-box mb-40">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Features
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      type="button"
                      role="tab"
                      aria-controls="contact-4"
                      aria-selected="false"
                    >
                      Specifications
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item">
                        <div class="car-description mb-50">
                          <h3 class="heading-2">Description</h3>
                          <p v-html="car.description">
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="accordion accordion-flush" id="accordionFlushExample2">
                      <div class="accordion-item">
                        <div class="features-info mb-50">
                          <h3 class="heading-2">Features</h3>
                          <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="idx in car.features">
                              <ul>
                                <li>{{ idx }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact-4" role="tabpanel" aria-labelledby="contact-tab-4">
                    <div class="accordion accordion-flush" id="accordionFlushExample4">
                      <div class="accordion-item">
                        <div class="car-amenities mb-30">
                          <h3 class="heading-2">Specifications</h3>
                          <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                              <ul class="amenities">
                                <li><i class="fa fa-check"></i>Top Speed: {{ car.specifications.topSpeed }}</li>
                                <li><i class="fa fa-check"></i>Fuel Type: {{ car.specifications.fuelType }}</li>
                                <li><i class="fa fa-check"></i>Mileage: {{ car.specifications.mileage }}</li>
                                <li><i class="fa fa-check"></i>Engine: {{ car.specifications.engine }}</li>
                                <li><i class="fa fa-check"></i>Gear: {{ car.specifications.gears }}</li>
                              </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                              <ul class="amenities">
                                <li><i class="fa fa-check"></i>Drive Train: {{ car.specifications.driveTrain }}</li>
                                <li><i class="fa fa-check"></i>Body Style: {{ car.specifications.bodyStyle }}</li>
                                <li><i class="fa fa-check"></i>Year:{{ car.specifications.year }}</li>
                                <li><i class="fa fa-check"></i>Fuel Type: {{ car.specifications.fuelType }}</li>
                              </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                              <ul class="amenities">
                                <li><i class="fa fa-check"></i>Doors: {{ car.specifications.doors }}</li>
                                <li><i class="fa fa-check"></i>Horse Power: {{ car.specifications.horsePower }}</li>
                                <li><i class="fa fa-check"></i>Location: {{ car.specifications.location }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Contact 2 start -->
              <div class="contact-2 ca mb-50">
                <h3 class="heading-2">Contact Form</h3>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group name">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Full Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group email">
                        <input type="email" class="form-control" placeholder="Email" aria-label="Email Address" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group subject">
                        <input type="text" class="form-control" placeholder="Subject" aria-label="Subject" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group number">
                        <input type="text" class="form-control" placeholder="Phone" aria-label="Phone Number" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group message">
                        <textarea class="form-control" placeholder="Write message" aria-label="Write message"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send-btn">
                        <button type="button" class="btn btn-5">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="sidebar-right">
              <!-- Advanced search start -->
              <div class="widget advanced-search d-none-992">
                <h3 class="sidebar-title">Refine Your Search</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul>
                  <li>{<span>Make</span>{{ car.make }}</li>
                  <li><span>Model</span>{{ car.model }}</li>
                  <li><span>Body Style</span>{{ car.bodyStyle }}</li>
                  <li><span>Year</span>{{ car.specifications.year }}</li>
                  <li><span>Condition</span>{{ car.condition }}</li>
                  <li><span>Mileage</span>{{ car.mileage }}</li>
                  <li><span>Transmission</span>{{ car.specifications.transmission }}</li>
                  <li><span>Engine</span>{{ car.engine }}</li>
                  <li><span>No. of Gears:</span>{{ car.gears }}</li>
                  <li><span>Location</span>{{car.specifications.location}}</li>
                  <li><span>Fuel Type</span>{{ car.specifications.fuelType }}</li>
                </ul>
              </div>
              <!-- Question start -->
              <div class="widget question">
                <h5 class="sidebar-title">Get a Question?</h5>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul class="contact-info">
                  <li><i class="flaticon-pin"></i>20, Lekki avenue</li>
                  <li><i class="flaticon-mail"></i><a href="mailto:info@elitemo.com">info@elitemo.com</a></li>
                  <li><i class="flaticon-phone"></i><a href="tel:+23470872828">+234709893383</a></li>
                </ul>
                <div class="social-list clearfix">
                  <ul>
                    <li>
                      <a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" class="google-bg"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                      <a href="#" class="rss-bg"><i class="fa fa-rss"></i></a>
                    </li>
                    <li>
                      <a href="#" class="linkedin-bg"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Car details page end -->
  </div>
  <div class="flex justify-center items-center h-screen primary__gradient" v-else>
    <h1 class="text-white text-6xl">404</h1>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'site',
  middleware: 'guest',

  computed: {
    ...mapGetters({
      car: 'car/getCar',
    }),
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions({}),
  },

  mounted() {
    this.$nextTick(() => {});
  },
};
</script>
