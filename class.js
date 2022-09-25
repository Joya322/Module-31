class Student{
    name;
    id;
    section = "A";
    district;
    bloodGroup;

    constructor(name, id, district, bloodGroup) {
        this.name = name;
        this.id = id;
        this.district = district;
        this.bloodGroup = bloodGroup;
    }
}

const Jannat = new Student("Jannat", "180121033", "Cumilla", "B+");

console.log(Jannat);