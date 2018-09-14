import '../styles/footer.styl'

export default {
    data() {
        return {
            author: 'Fanfunda'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}
