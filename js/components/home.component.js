import component from 'vue-class-component';

@component
export default class HomeComponent {
    name = 'John Doe';
    static template = `
    <div>
        <input v-model="name">
        <h3>Hello {{name}}<span v-if="!name">Human</span> </h3>
        <br />
        <br />

        <div v-if="name">
            <a href="/#!/users/{{{name}}}">Goto Profile</a>
        </div>
    </div>
    `
}
