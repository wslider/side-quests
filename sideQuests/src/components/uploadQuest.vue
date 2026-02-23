    <template>
    
    <section id="uploadSideQuests" class="section container">

        <form class="quest-form" :quest-form="true" > 
            <h2>Upload Your Own Side Quest</h2>
            <p>Share your favorite hidden gems and micro-adventures with the community! Submit your own side quests by filling out the form below. Please include a title, description, location (address or coordinates), and any tips or photos you'd like to share.</p>
    
            <label class="formItem">
                Title:
                <input type="text" name="title" required>
            </label>
    
            <label class="formItem">
                Description:
                <textarea name="description" rows="4" required></textarea>
            </label>
    
            <label class="formItem">
                Location (address or coordinates):
                <input type="text" name="location" required>
            </label>
    
            <label class="formItem">
                Tips/Photos (optional):
                <textarea name="tips" rows="3"></textarea>
            </label>
    
            
        </form>

        <button type="submit" class="button" id="submitQuestButton">Submit Quest</button>
    
    </section>

    </template>

<script setup>

</script>

<style scoped>
</style>