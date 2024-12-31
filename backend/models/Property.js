import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
{
    owner: {
      type: String,
      required: [true, 'Please provide owner'],
      maxlength: 50,
    },
    price: {
      type: String,
      required: [true, 'Please provide price'],
    },
    status: {
      type: String,
      enum: ['meeting', 'declined', 'pending'],
      default: 'pending',
    },
    propertyType: {
      type: String,
      enum: ['rent', 'buy'],
      default: 'rent',
    },
    propertyLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user']
    },
    avatar: String,
    avatarPublicId: String,
  },
  { timestamps: true }
)

const Property = mongoose.model('Property', propertySchema);
export default Property