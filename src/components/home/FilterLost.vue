<template>
  <v-container py-0>
    <v-layout wrap>
      <v-flex xs12 md4 class="text-left">
        <v-combobox
          v-model="chips"
          :items="items"
          chips
          clearable
          label="Sorting Results by Post Type"
          multiple
          solo
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>&nbsp;
              <!-- <span>(interest)</span> -->
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 md4 class="text-left">
        <v-combobox
          v-model="chips"
          :items="gender"
          chips
          clearable
          label="Sorting Results by Pet Gender"
          multiple
          solo
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>&nbsp;
              <!-- <span>(interest)</span> -->
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 md4 class="text-left">
        <v-combobox
          v-model="chips"
          :items="items"
          chips
          clearable
          label="Sorting Results by Province"
          multiple
          solo
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>&nbsp;
              <!-- <span>(interest)</span> -->
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      chips: [],
      items: ["Missing", "Found"],
      gender: ["Male", "Female"],
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
    ]
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>