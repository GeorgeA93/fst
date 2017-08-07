import { find } from 'lodash';

export default class Post {

    constructor(id, title, subtitle, bodyText) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.bodyText = bodyText;
    }

    static getAll() {
        return posts;
    }

    static getOne(id) {
        return find(posts, post => post.id === Number(id));
    }

    static create(post) {
        posts.push(post);
        return post;
    }

    static update(id, newPost) {
        let postToUpdate = Post.getOne(id);
        if (!postToUpdate) {
            return null;
        }
        const updateIndex = posts.indexOf(postToUpdate);
        postToUpdate = newPost;
        posts[updateIndex] = postToUpdate;
        return postToUpdate;
    }

    static delete(id) {
        const postToDelete = Post.getOne(id);
        if (!postToDelete) {
            return null;
        }
        const deleteIndex = posts.indexOf(postToDelete);
        posts.splice(deleteIndex, 1);
        return postToDelete;
    }

}

const posts = [
    new Post(0, 'Hello World', 'Say hello to anyone', 'Body'),
    new Post(1, 'Hello World', 'Say hello to anyone', 'Body'),
    new Post(2, 'Hello World', 'Say hello to anyone', 'Body'),
    new Post(3, 'Hello World', 'Say hello to anyone', 'Body'),
    new Post(4, 'Hello World', 'Say hello to anyone', 'Body'),
    new Post(5, 'Hello World', 'Say hello to anyone', 'Body'),
];
