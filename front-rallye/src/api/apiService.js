import axios from 'axios';

const apiSetvices = {
    addVoiture: async (data) => {
        try {
            const rep = await axios.post('localhost:3000/api/addVoiture',data);
            return rep.data;
        } catch (error) {
            console.log('Erreur lors de l\'ajout',error );
            throw error;
        }
    },


    getVoitures: async () => {
        try {
            const rep = await axios.get('localhost:3000/api/voitures');
            return rep.data;
        } catch (error) {
            console.log('Erreur sur getAll', error);
            throw error;
        }
    },


    updateVoiture: async (id,data) => {
        try {
            const rep = await axios.put(`localhost:3000/api/updateVoiture/${id}`,data);
            return rep.data;
        } catch (error) {
            console.log('Erreur sur update',error);
            throw error;
        }
    },


    deleteVoiture: async (id) => {
        try {
            const rep = await axios.delete(`localhost:3000/api/deleteVoiture/${id}`);
            return rep.data;
        } catch (error) {
            console.log('Erreur sur delete',error);
            throw error;
        }
    },


    getVoitureById: async (id)=>{
        try {
            const rep = await axios.get(`localhost:3000/api/voitureById/${id}`);
            return rep.data;
        } catch (error) {
            console.log('Erreur sur ById',error);
            throw error;
        }
    },
};

export default apiSetvices;
