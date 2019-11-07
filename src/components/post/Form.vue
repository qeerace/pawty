<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          <v-container fill-height fluid grid-list-xl>
            <v-layout justify-center wrap>
              <v-flex xs12 md8>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-container py-0>
                    <v-layout wrap>
                      <v-flex xs12 md12>
                        <v-icon color="blue-grey darken-3">mdi-cursor-default-click</v-icon>
                        <span
                          class="title text-left font-weight-regular blue-grey--text text--darken-3"
                        >Select your post type</span>
                      </v-flex>
                      <v-radio-group v-model="form.post_type" row>
                        <v-radio label="Lost pet" value="lost" color="yellow darken-3"></v-radio>
                        <v-radio label="Found pet" value="found" color="yellow darken-3"></v-radio>
                      </v-radio-group>
                      <v-flex xs12 md12>
                        <h1
                          class="headline text-center font-weight-bold blue-grey--text text--darken-3"
                        >Fill Information to Report A Pet</h1>
                      </v-flex>
                      <v-flex xs12 md12>
                        <v-text-field
                          label="Title"
                          v-model="form.topic"
                          color="yellow darken-3"
                          :rules="titleRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md4>
                        <v-text-field
                          label="Name"
                          v-model="form.name"
                          color="yellow darken-3"
                          :rules="nameRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md4>
                        <v-text-field
                          label="Phone No."
                          v-model="form.tel"
                          color="yellow darken-3"
                          :rules="telRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md4>
                        <v-text-field
                          label="E-mail"
                          v-model="form.email"
                          color="yellow darken-3"
                          :rules="emailRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md12>
                        <v-file-input
                          :rules="picRules"
                          accept="image/png, image/jpeg, image/bmp"
                          prepend-icon="mdi-camera"
                          label="Pet Image"
                          color="yellow darken-3"
                          v-on:change="form.pic"
                        ></v-file-input>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-select
                          :items="type"
                          v-model="form.pet_type"
                          label="Pet Type"
                          color="yellow darken-3"
                          :rules="typeRules"
                          required
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          label="If you selected Others, please specify here"
                          :disabled="form.pet_type != 'others'"
                          v-model="form.pet_type_other"
                          color="yellow darken-3"
                        />
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          label="Pet Breed"
                          v-model="form.breed"
                          color="yellow darken-3"
                        />
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          label="Pet Color"
                          v-model="form.color"
                          color="yellow darken-3"
                          :rules="colorRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-select
                          :items="items"
                          label="Pet Gender"
                          v-model="form.gender"
                          color="yellow darken-3"
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-select
                          :items="size"
                          label="Pet Size (Small = 1, Medium = 2, Large = 3)"
                          color="yellow darken-3"
                          v-model="form.size"
                        ></v-select>
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea
                          label="Description"
                          v-model="form.description"
                          value
                          color="yellow darken-3"
                        />
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea
                          label="Address"
                          v-model="form.address"
                          value
                          color="yellow darken-3"
                        />
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-select
                          :items="province"
                          label="Province"
                          v-model="form.province"
                          color="yellow darken-3"
                          :rules="provinceRules"
                          required
                        />
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="form.missing_found_date"
                              label="Date"
                              prepend-icon="mdi-enent"
                              readonly
                              v-on="on"
                              color="yellow darken-3"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.missing_found_date"
                            @input="menu2 = false"
                            color="yellow darken-3"
                          ></v-date-picker>
                        </v-menu>
                      </v-flex>
                      <v-flex xs12 text-xs-right>
                        <v-btn
                          class="mx-0 subtitle-2 font-italic font-weight-medium blue-grey--text text--darken-3"
                          color="yellow darken-3"
                          @click="validate()"
                          :disabled="!valid"
                        >Post Now!</v-btn>
                      </v-flex>
                      <div>{{form.pet_type_other}}</div>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    valid: true,
    items: ["Male", "Female"],
    type: ["Dog", "Cat", "Bird", "others"],
    size: ["1", "2", "3"],
    province: [
      "Bangkok",
      "Amnat Charoen",
      "Ang Thong",
      "Bueng Kan",
      "Buri Ram",
      "Chachoengsao",
      "Chai Nat",
      "Chaiyaphum",
      "Chanthaburi",
      "Chiang Mai",
      "Chiang Rai",
      "Chon Buri",
      "Chumphon",
      "Kalasin",
      "Kamphaeng Phet",
      "Kanchanaburi",
      "Khon Kaen",
      "Krabi",
      "Lampang",
      "Lamphun",
      "Loei",
      "Lop Buri",
      "Mae Hong Son",
      "Maha Sarakham",
      "Mukdahan",
      "Nakhon Nayok",
      "Nakhon Pathom",
      "Nakhon Phanom",
      "Nakhon Ratchasima",
      "Nakhon Sawan",
      "Nakhon Si Thammarat",
      "Nan",
      "Narathiwat",
      "Nong Bua Lam Phu",
      "Nong Khai",
      "Nonthaburi",
      "Pathum Thani",
      "Pattani",
      "Phang-nga",
      "Phatthalung",
      "Phayao",
      "Phetchabun",
      "Phetchaburi",
      "Phichit",
      "Phitsanulok",
      "Phrae",
      "Phra Nakhon Si Ayutthaya",
      "Phuket",
      "Prachin Buri",
      "Prachuap Khiri Khan",
      "Ranong",
      "Ratchaburi",
      "Rayong",
      "Roi Et",
      "Sa Kaeo",
      "Sakon Nakhon",
      "Samut Prakan",
      "Samut Sakhon",
      "Samut Songkhram",
      "Saraburi",
      "Satun",
      "Sing Buri",
      "Si Sa Ket",
      "Songkhla",
      "Sukhothai",
      "Suphan Buri",
      "Surat Thani",
      "Surin",
      "Tak",
      "Trang",
      "Trat",
      "Ubon Ratchathani",
      "Udon Thani",
      "Uthai Thani",
      "Uttaradit",
      "Yala",
      "Yasothon"
    ],
    date: null,
    menu: false,
    modal: false,
    menu2: false,
    user: "",
    form: {
      post_type: "lost",
      name: "",
      pet_type: "",
      pet_type_other: "",
      email: "",
      tel: "",
      social_account: "",
      topic: "",
      pic: "",
      description: "",
      size: "",
      gender: "",
      breed: "",
      color: "",
      address: "",
      province: "",
      missing_found_date: ""
    },
    titleRules: [v => !!v || "Title is required"],
    nameRules: [v => !!v || "Name is required"],
    telRules: [v => !!v || "Phone No. is required"],
    emailRules: [v => !!v || "E-mail is required"],
    picRules: [value => !value || "Pet Image is required"],
    typeRules: [v => !!v || "Pet Type is required"],
    colorRules: [v => !!v || "Pet Color is required"],
    provinceRules: [v => !!v || "Province is required"]
  }),
  mounted() {
    this.date = new Date().toISOString().substr(0, 10);
    this.user = this.$store.getters.getUser;
    console.log(this.user);
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
