const defaultImage = "https://static1.squarespace.com/static/53ec2edfe4b063ce9288b6a6/543f5f59e4b0f1329193af54/54443417e4b08cdfdcab6fa7/1413756118896/Soldier-PlaceholderArt.jpg?format=1500w"

export class Character {
    constructor(id, name, image) {
        this.id = id
        this.name = name
        this.image = image || defaultImage
    }
}
